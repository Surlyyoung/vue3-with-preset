<template>
  <div class="a-title flex-container start" :class="{'a-title-right': isRight}">
    <div class="a-title-icon f-25"><span class="iconfont" :class="iconfont"></span></div>
    <div class="a-title-icon_title flex-container between">
      <p class="f-18 p-l-8">{{title}}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    entitle: String,
    subTitle: String,
    iconfont: {
      type: String,
      default: 'el-icon-eleme'
    },
    isRight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  @import "../../variable";
  .a-title {
    height: 65px;
    color: $primary;
    font-size: 20px;
    background-image: url('left-icon-bg.png');
    background-size: 100% 100%;
    background-position: -14px 4px;
    position: relative;
    .a-title-icon {
      width: 65px;
      height: 65px;
      line-height: 65px;
      text-align: center;
    }

  }
</style>
