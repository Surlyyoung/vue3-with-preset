<template>
  <div class="equipment-number-tab flex-container">
    <div class="equipment-number-tab_list x-flex-a" v-for="(item, index) in list" :key="index">
      <p class="equipment-number-tab_text" :class="item.textClass">{{item.text}}</p>
      <p :class="item.subClass">{{item.subText}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
  .equipment-number-tab {
    .equipment-number-tab_list {
      background-image: url('eq-table.png');
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center 100%;
      margin-left: 16px;
      text-align: center;
      &:first-child {
        margin-left: 0px;
      }
    }
    .equipment-number-tab_text {
      font-family: DS-Digital, DS;
    }
  }
</style>
