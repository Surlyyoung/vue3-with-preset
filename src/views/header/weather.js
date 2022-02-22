import { ref, onMounted } from 'vue';

const { AMap } = window

// 获取天气
function getWeather () {

  const weather = ref({});
  const handleWeather = async () => {
    weather.value = await getAmapWeather();
  }

  onMounted(handleWeather)
  return {
    weather,
  }
  
}

function getAmapWeather() {
  return new Promise((resolve, reject) => {
    let weather = {};
    AMap.plugin('AMap.Weather', () => {
      let weatherPlugin = new AMap.Weather()
      // 查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
      weatherPlugin.getLive('奉贤区', (err, data) => {
        if (err) {
          reject({ errMsg: '查询天气出错'})
        }
        
        weather = data
        if (
          weather.weather == '阴' ||
          weather.weather == '多云'
        ) {
          weather.imgSrc = './static/images/tianqi/clound.png'
        } else if (weather.weather == '晴') {
          weather.imgSrc = './static/images/tianqi/sun.png'
        } else if (
          weather.weather == '小雨' ||
          weather.weather == '大雨' ||
          weather.weather == '中雨'
        ) {
          weather.imgSrc = './static/images/tianqi/rain.png'
        }

        resolve(weather)
      })
    })
  })
}

export default getWeather