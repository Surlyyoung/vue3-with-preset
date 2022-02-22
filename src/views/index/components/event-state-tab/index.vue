<template>
  <div class="event-state-tab flex-container">
    <div class="event-state-tab_left">
      <i class="iconfont" :class="total.iconfont"></i>
      <p :class="total.textClass" class="m-t-8 m-b-4">{{total.text}}</p>
      <p :class="total.subClass">{{total.subText}}</p>
    </div>
    <div class="x-auto w-10 flex-container wrap between">
      <div v-for="(item, index) in list" :key="index" class="flex-container m-b-16" style="width: 49%">
        <i class="iconfont" :class="item.iconfont"></i>
        <div>
          <p :class="item.textClass">{{item.text}}</p>
          <p :class="item.subClass">{{item.subText}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Object,
      default: () => ({iconfont: 'iconshijian c-replace f-42', text: 2316, subText: '全部', textClass: 'c-replace f-24', subClass: 'c-fff f-14'})
    },
    list: {
      type: Array,
      default: () => [
        {iconfont: 'iconchulizhong c-warning f-32 w-50', text: 2316, subText: '全部', textClass: 'c-warning f-24', subClass: 'c-fff f-14'},
        {iconfont: 'iconchaoshishijian c-danger f-32 w-50', text: 2316, subText: '全部', textClass: 'c-danger f-24', subClass: 'c-fff f-14'},
        {iconfont: 'iconjijiangchaoshi c-info f-32 w-50', text: 2316, subText: '全部', textClass: 'c-info f-24', subClass: 'c-fff f-14'},
        {iconfont: 'iconyiwancheng c-success f-32 w-50', text: 2316, subText: '全部', textClass: 'c-success f-24', subClass: 'c-fff f-14'}
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "../../../../_variable.scss";
  .event-state-tab {
    .event-state-tab_left {
      width: 90px;
      border-right: 1px solid rgba($info, .3);
    }
  }
</style>
