// eslint-disable-next-line no-use-before-define
const {AMap} = window
let map = null

/**
 * @desc   创建 地图
 * @author wuhl
 * @param  {object} obj
 * @param  {string} obj.id - DOM元素ID
 * @param  {string} [obj.mapStyle = 'amap://styles/ff8a'] - 地图样式
 * @param  {number} [obj.zoom = 12] - 层级
 * @param  {array} [obj.zooms = [8, 22]] - 最大最小层级
 * @param  {array} [obj.center = [121.741738, 31.089304]] - 中心点
 * @param  {number} [obj.pitch = 30] - 倾斜角度
 * @param  {boolean} [obj.rotateEnable = true] - 是否可以旋转
 * @param  {number} [obj.rotation = 0] 选择角度
 * @param  {string} [obj.viewMode = '3D'] 地图类型
 * @global AMap 高德地图
 * @return {object} map
 */
function createMap(obj = {}) {
  const {id, mapStyle, zoom, zooms, center, pitch, rotateEnable, rotation, viewMode} = obj
  const mapDate = {
    mapStyle: mapStyle || 'amap://styles/03a7886cb27fa09cdd38680f15e93dc7',
    zoom: zoom || 12,
    zooms: zooms || [8, 22],
    center: center || [121.741738, 31.089304],
    pitch: pitch || 30,
    rotateEnable: rotateEnable === undefined || true,
    rotation: rotation || 0,
    viewMode: viewMode || '3D'
  }
  // 判断是否IE浏览器
  const sUsrAg = navigator.userAgent
  if (sUsrAg.indexOf('IE') > -1) delete mapDate.viewMode
  map = new AMap.Map(id, mapDate)
  map.setFeatures(['bg','point']);  // 支持bg（地图背景）、point（兴趣点）、road（道路）、building（建筑物）
  // 地图点击事件
  map.on('click', (e) => {
    map.clearInfoWindow()
    console.log(`[${e.lnglat.getLng()}, ${e.lnglat.getLat()}],`)
  })
  return map
}

const polygonObj = {}
/**
 * @desc   创建 多个描边
 * @author wuhl
 * @param  {object} obj
 * @param  {string} [obj.name = 'key1213'] - 作为删除的唯一ID
 * @param  {array} obj.paths - 描边数组集合
 * @param  {function} [obj.content = undefined] - 显示的dom回调函数
 * @param  {function} [obj.offset = new AMap.Pixel(0, 0)] - 偏移回调函数
 * @param  {function} [obj.clickBack] - 点击回调函数
 * @param  {boolean} [obj.fitView = true] - 是否自适应撒点
 * @global map - 地图
 * @global polygonObj - 描边存储对象
 * @return {string} 唯一ID
 */
function createPolygons(obj = {}) {
  const {name, paths} = obj
  const polygons = []
  paths.forEach((path) => {
    const polygon = new AMap.Polygon({
      path,
      strokeDasharray: [0, 0, 0],
      strokeColor: 'rgba(255,255,0,1)',
      strokeWeight: 2,
      strokeOpacity: 0.5,
      fillColor: 'rgba(255,255,255,1)',
      fillOpacity: 0.2
    })
    polygon.on('click', (e) => {
      console.log(e);
      map.clearInfoWindow()
    })
    polygon.on('mouseover', (e) => {
      console.log(e);
      polygon.setOptions({fillOpacity: 0.5})
    })
    polygon.on('mouseout', (e) => {
      console.log(e);
      polygon.setOptions({fillOpacity: 0})
    })
    polygons.push(polygon)
    map.add(polygon)
  })
  const key = name || `key${~~(Math.random() * 100000)}`
  polygonObj[key] = polygons
  return key
}

const clusterObj = {}
/**
 * @desc   创建 聚合撒点
 * @author wuhl
 * @param  {object} obj
 * @param  {string} [obj.name = 'key1213'] - 作为删除的唯一ID
 * @param  {array} obj.points - 撒点数组
 * @param  {function} [obj.content = undefined] - 显示的dom回调函数
 * @param  {function} [obj.offset = new AMap.Pixel(0, 0)] - 偏移回调函数
 * @param  {function} [obj.clickBack] - 点击回调函数
 * @param  {boolean} [obj.fitView = true] - 是否自适应撒点
 * @global map - 地图
 * @global clusterObj - 撒点存储对象
 * @return {string} 唯一ID
 */
function createPoints(obj = {}) {
  const {name, points, content, offset, clickBack, fitView} = obj
  const markers = []
  points.forEach((val) => {
    const lng = val.lng || val.longitude || val.lon
    const lat = val.lat || val.latitude
    if (lng && lat) {
      const marker = new AMap.Marker({
        position: [lng, lat],
        content: content ? content(val) : undefined,
        offset: offset ? offset(AMap.Pixel, val) : new AMap.Pixel(0, 0)
      })
      marker.on('click', (e) => {
        if (clickBack) clickBack(val, e)
      })
      markers.push(marker)
    }
  })
  const cluster = new AMap.MarkerClusterer(map, markers, {
    gridSize: 80,
    maxZoom: 1,
    // zoomOnClick: false
  })
  const key = name || `key${~~(Math.random() * 100000)}`
  clusterObj[key] = cluster
  if (fitView || fitView === undefined) map.setFitView(markers)
  return key
}

/**
 * @desc   清除所有撒点及清楚部分覆盖物
 * @author wuhl
 * @param  {array} [list] - 默认不传清除全部
 * @global map 地图
 * @global clusterObj 撒点存储对象
 * @return {Boolean}
 */
function clearMap(list = []) {
  if (list.length) {
    list.forEach((val) => {
      clusterObj[val].clearMarkers()
      delete clusterObj[val];
    })
    return false
  }
  map.clearMap()
  Object.keys(clusterObj).forEach((key) => {
    clusterObj[key].clearMarkers()
    delete clusterObj[key]
  })
  return true
}

/**
 * @desc   地图居中 层级 俯瞰角度
 * @author wuhl
 * @param  {object} obj
 * @param  {number|string} [obj.lat] - 经度
 * @param  {number|string} [obj.lng] - 纬度
 * @param  {number} [obj.zoom] - 层级1-22
 * @param  {number} [obj.pitch] - 倾斜角度
 * @global map 地图
 * @return {undefined}
 */
function changeCenter(obj = {}) {
  const {lat, lng, zoom, pitch} = obj
  if (lat && lng) map.setCenter([lng, lat])
  if (zoom) map.setZoom(zoom)
  if (pitch) map.setPitch(pitch)
}

export default {
  createMap,
  createPolygons,
  createPoints,
  clearMap,
  changeCenter
}
