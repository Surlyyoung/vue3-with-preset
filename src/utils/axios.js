import axios from 'axios'
// 响应时间
axios.defaults.timeout = 10000
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 配置接口地址
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : '/api'

axios.defaults.withCredentials = true

/**
 * @desc   get 请求
 * @author wuhl
 * @param  {object} obj
 * @param  {string} obj.url - 请求路径
 * @param  {object} [obj.params] - 请求参数
 * @global axios 请求
 * @return {promise} promise
 */
function apiGet(obj = {}) {
  const {url, params} = obj
  return new Promise((resolve, reject) => {
    axios.get(url, { params }).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err)
    })
  })
}

/**
 * @desc   post 请求
 * @author wuhl
 * @param  {object} obj
 * @param  {string} obj.url - 请求路径
 * @param  {object} [obj.params] - 请求参数
 * @global axios 请求
 * @return {promise} promise
 */
function apiPost(obj = {}) {
  const {url, params} = obj
  return new Promise((resolve, reject) => {
    axios.post(url, params).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err);
    })
  })
}

/**
 * @desc   put 请求
 * @author wuhl
 * @param  {object} obj
 * @param  {string} obj.url - 请求路径
 * @param  {object} [obj.params] - 请求参数
 * @global axios 请求
 * @return {promise} promise
 */
function apiPut(obj = {}) {
  const {url, params} = obj
  return new Promise((resolve, reject) => {
    axios.put(url, params).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

/**
 * @desc   delete 请求
 * @author wuhl
 * @param  {object} obj
 * @param  {string} obj.url - 请求路径
 * @param  {object} [obj.params] - 请求参数
 * @global axios 请求
 * @return {promise} promise
 */
function apiDelete(obj = {}) {
  const {url, params} = obj
  return new Promise((resolve, reject) => {
    axios.delete(url, { params }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    const _time = new Date().getTime()
    config.params = {...config.params, ...{_r: _time}}
    return config
  }, (err) => Promise.reject(err)
)

// 响应拦截器
axios.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
)

export default {...axios, ...{apiGet, apiPost, apiPut, apiDelete}}
