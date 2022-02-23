import Mock from 'mockjs'

Mock.setup({
  timeout: '400-1000'
})

/* eslint-disable quote-props */
function getIcon() {
  const arr = [
    {iconfont: 'iconanquanmao', text: '安全帽'},
    {iconfont: 'icon5gongzuofushi', text: '越界告警'},
    {iconfont: 'iconwajueji', text: '明火'},
    {iconfont: 'iconchouyan', text: '越界告警的'}
  ]
  return arr[randomInt(0, 4)]
}

function randomInt(min, max) {
  return ~~(Math.random() * (max - min) + min)
}

function randomFloat(min, max) {
  return (Math.random() * (max - min) + min)
}

Mock.mock(RegExp('/api/login?.*'), {
  'code': 0,
  'data|10': [
    {
      'id|+1': 1,
      'lng': () => randomFloat(121.408406, 121.719406),
      'lat': () => randomFloat(30.905757, 31.416757),
      'iconfont': getIcon,
      'num|0-1999': 0,
      'createTime': '@date("yyyy-MM-dd HH:mm:ss")'
    }
  ]
});
Mock.mock(RegExp('/api/path?.*'), {
  'code': 0,
  'data|10': [
    {
      'id|+1': 1,
      'points': () => {
        const arr = []
        let lng = randomFloat(121.408406, 121.719406)
        let lat = randomFloat(30.905757, 31.416757)
        let num = 1
        // eslint-disable-next-line no-plusplus
        for (let i = 1; i < 5; i++) {
          if (i % 2 === 1) {
            lng += randomFloat(0.018406, 0.019406) * num
          } else {
            lat += randomFloat(0.018406, 0.019406) * num
            num = -1
          }
          arr.push([lng, lat])
        }
        return arr
      },
      'iconfont': getIcon,
      'num|0-1999': 0,
      'createTime': '@date("yyyy-MM-dd HH:mm:ss")'
    }
  ]
});
/* eslint-enable */
