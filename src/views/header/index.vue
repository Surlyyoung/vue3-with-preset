<template>
    <div class="screen-header flex-container c-fff">
        <div class="f-16 p-l-24 c-start w-400">
            <span class="p-r-20">{{dateYear}}</span>
            <span>{{dateHH}}:{{dateMM}}:{{dateSS}}</span>
            <span class="p-l-28">{{weekDay}}</span>
        </div>
        <div class="x-auto textcut t-c screen-header_title f-36">
            {{title}}
        </div>
        <div class="f-16 p-r-24 t-r w-400 c-start">
            <span>
                <img :src="weather.imgSrc" alt class="screen-header_weather m-r-12" />
                {{weather.temperature ? `${weather.temperature}℃` : ''}}
            </span>
            <span
                class="p-l-12"
                :class="[weather.humidity > 50 && weather.humidity <70  ? '' :'',Number(weather.humidity)>70?'c-head1' :'' ]"
            >
                <i class="iconfont iconyezi"></i>
                空气湿度 {{weather.humidity}}{{weather.level}}
            </span>
        </div>
        <div class="screen-header_line"></div>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      weather: {},
      dateYear: '',
      weekDay: '',
      dateHH: '00',
      dateMM: '00',
      dateSS: '00',
      title: '数据大屏模板',
      isSubName: false
    }
  },
  mounted () {
    // this.getWeather()
    this.$nextTick(function () {
      setInterval(this.showTime, 1000)
    })
  },
  methods: {
    showTime () {
      var mydate = new Date()
      let arr_week = new Array(
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      )
      let year = '',
        month = '',
        date = '',
        hh = '',
        mm = '',
        ss = '',
        week = ''
      year = '' + mydate.getFullYear()
      month +=
                (mydate.getMonth() + 1 < 10 ? '0' : '') +
                (mydate.getMonth() + 1)
      date += (mydate.getDate() < 10 ? '0' : '') + mydate.getDate()
      hh += (mydate.getHours() < 10 ? '0' : '') + mydate.getHours()
      mm += (mydate.getMinutes() < 10 ? '0' : '') + mydate.getMinutes()
      ss += (mydate.getSeconds() < 10 ? '0' : '') + mydate.getSeconds()
      week = arr_week[mydate.getDay()]
      this.dateYear = year + '年' + month + '月' + date + '日'
      this.weekDay = week
      this.dateHH = hh
      this.dateMM = mm
      this.dateSS = ss
    },
    // 获取天气
    // getWeather () {
    //   AMap.plugin('AMap.Weather', () => {
    //     let aaa = new AMap.Weather()
    //     // 查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
    //     aaa.getLive('奉贤区', (err, data) => {
    //       if (err) return false
    //       this.weather = data
    //       if (
    //         this.weather.weather == '阴' ||
    //                     this.weather.weather == '多云'
    //       ) {
    //         this.weather.imgSrc =
    //                         './static/images/tianqi/clound.png'
    //       } else if (this.weather.weather == '晴') {
    //         this.weather.imgSrc = './static/images/tianqi/sun.png'
    //       } else if (
    //         this.weather.weather == '小雨' ||
    //                     this.weather.weather == '大雨 ' ||
    //                     this.weather.weather == '中雨'
    //       ) {
    //         this.weather.imgSrc = './static/images/tianqi/rain.png'
    //       }
    //     })
    //   })
    // }
  }
}
</script>

<style scoped lang="scss">
@import 'index';
</style>
