<template>
  <div class="event-list scroll">
    <div v-for="(item, index) in list" :key="index" class="event-list_item flex-container p-t-16 p-b-16">
      <div class="event-list_icon"><i class="iconfont" :class="item.icon"></i></div>
      <div class="x-auto w-10">
        <div class="flex-container m-b-8">
          <p>{{item.name}}</p>
          <p class="x-auto">责任人：{{item.user}}</p>
        </div>
        <div class="flex-container">
          <p class="x-auto textcut w-10 c-info">{{item.addr}}</p>
          <p class="w-130 t-r">{{item.createTime}}</p>
        </div>
      </div>
      <div class="event-list_state">
        <svg width="88px" height="28px" viewBox="0 0 88 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none">
            <g transform="translate(-378.000000, -795.000000)" :class="classObj[item.state]">
              <g transform="translate(5.000000, 533.000000)">
                <g transform="translate(0.000000, 262.248711)">
                  <polygon points="373.248711 0.248711306 460.248711 0.248711306 460.248711 27.2487113 373.248711 27.2487113 386.547742 13.7487113"></polygon>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <p>未完成</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [
        
      ]
    },
    classObj: {
      type: Object,
      default: () => ({
        0: 'f-success',
        1: 'f-primary',
        2: 'f-warning',
        3: 'f-danger'
      })
    }
  }
}
</script>

<style lang="scss">
  @import "../../../../_variable.scss";
  .event-list {
    color: $fff;
    font-size: 16px;
    max-height: 500px;
    .event-list_item {
      border-bottom: 1px solid rgba($info, .3);
      position: relative;
    }
    .event-list_icon {
      width: 42px;
      height: 42px;
      background: rgba(#6A4994, 0.7);
      border-radius: 50%;
      margin-right: 8px;
      text-align: center;
      line-height: 42px;
      font-size: 28px;
    }
    .event-list_state {
      position: absolute;
      right: 0;
      top: 8px;
      width: 88px;
      height: 28px;
      text-align: center;
      line-height: 28px;
      font-size: 14px;
      p {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
      }
      .event-list_state_svg {
        fill: $success;
      }
    }
  }
</style>
