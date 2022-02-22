<template>
  <div class="index-right screen-right">
    <!-- <aaaa :num="123456" :data="{todayBTNRate:99,todayGreenCount:2,todayYellowCount:33,todayRedCount:3333,todayTotalCount:123456}"></aaaa> -->
    <!-- <div class="video-wrapper">
      <VideoCard :options="{sources:[{src:'/live/cctv-13/1.m3u8', type: 'application/x-mpegURL'}]}"/>
    </div> -->

    <ATitle title="事件告警" iconfont="iconshijiangaojing"></ATitle>
    <EventStateTab :total="eventStateTotal" :list="eventStateList"></EventStateTab>
    <EventList :list="eventList"></EventList>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import { SwiperOne, VideoCard } from 'ict-components'
import ATitle from '@/components/aTitle/index.vue'
import EventStateTab from './components/event-state-tab/index.vue'
import EventList from './components/event-list/index.vue'

export default {
  name: 'Home',
  components: { 
    // SwiperOne,
    // VideoCard,
    ATitle,
    EventStateTab,
    EventList,
  },
  data() {
    return {
      eventStateTotal: {iconfont: 'iconshijian c-replace f-42', text: 2316, subText: '全部', textClass: 'c-replace f-24', subClass: 'c-fff f-14'},
      eventStateList: [
        {iconfont: 'iconchulizhong c-warning f-32 w-50', text: 2316, subText: '全部', textClass: 'c-warning f-24', subClass: 'c-fff f-14'},
        {iconfont: 'iconchaoshishijian c-danger f-32 w-50', text: 2316, subText: '全部', textClass: 'c-danger f-24', subClass: 'c-fff f-14'},
        {iconfont: 'iconjijiangchaoshi c-info f-32 w-50', text: 2316, subText: '全部', textClass: 'c-info f-24', subClass: 'c-fff f-14'},
        {iconfont: 'iconyiwancheng c-success f-32 w-50', text: 2316, subText: '全部', textClass: 'c-success f-24', subClass: 'c-fff f-14'}
      ],
      eventList: [
        {icon: 'iconwajueji', name: '挖掘机预警', user: '刘小牛', state: 0, addr: '杨高中路云山路地铁附近工地', createTime: '03-25 14:07:18'},
        {icon: 'iconchouyan', name: '未戴安全帽', user: '方雨', state: 1, addr: '杨高中路云山路地铁附近工地', createTime: '03-25 14:07:18'},
        {icon: 'iconminghuotanceqi', name: '明火预警', user: '孙路', state: 2, addr: '杨高中路云山路地铁附近工地', createTime: '03-25 14:07:18'},
      ]
    }
  }
}
</script>
<style lang="scss">
  .index-right {
    height: auto;
    min-height: 480px;
    width: 480px;
    padding: 0 16px;
    background-color: #05162E;
    position: absolute;
    top: 100px;
    right: 0;
  }
</style>
