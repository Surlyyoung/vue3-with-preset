<template>
    <div class="screen-header flex-container c-fff">
        <div class="f-16 p-l-24 c-start w-400">
            <span class="p-r-20">{{reactData.dateYear}}</span>
            <span>{{reactData.dateHH}}:{{reactData.dateMM}}:{{reactData.dateSS}}</span>
            <span class="p-l-28">{{reactData.weekDay}}</span>
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
// import { reactive, onMounted } from 'vue';
import { handleTime } from './header';
import getWeather from './weather';
export default {
  name: 'index',
  data () {
    return {
      title: '数据大屏模板-Vue3',
    }
  },
  setup() {

    const { reactData } = handleTime();
    const { weather } = getWeather();
    return {
      reactData,
      weather,
    }
  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">
@import 'index';
</style>
