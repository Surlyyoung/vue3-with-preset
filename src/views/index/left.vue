<template>
  <div class="index-left screen-left">

    <ATitle title="设备概览" iconfont="iconshebei"></ATitle>
    <EquipmentNumberTab style="height: 124px" :list="eqList"></EquipmentNumberTab>

  </div>
</template>

<script>
// @ is an alias to /src
import ATitle from '@/components/aTitle/index.vue'
import EquipmentNumberTab from './components/equipment-number-tab/index.vue'

export default {
  name: 'Home',
  components: { 
    ATitle,
    EquipmentNumberTab,
  },
  data() {
    return {
      eqList: [
        {text: 2316, subText: '设备总数', textClass: 'c-primary f-42 m-b-20', subClass: 'c-fff f-14'},
        {text: 116, subText: '正常设备', textClass: 'c-success f-42 m-b-20', subClass: 'c-fff f-14'},
        {text: 136, subText: '设备总数', textClass: 'c-danger f-42 m-b-20', subClass: 'c-fff f-14'}
      ],
    }
  }
}
</script>
<style lang="scss">
  .index-left {
    // height: 980px;
    height: auto;
    min-height: 480px;
    width: 480px;
    padding: 0 16px;
    background-color: #05162E;
    position: absolute;
    top: 100px;
    left: 0;
  }
</style>
