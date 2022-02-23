<template>
  <div class="search-container">
    <label>搜索：</label><input type="text" placeholder="请输入关键字" @input="changeInputText">
    <!-- <button class="btn-search" @click="">请搜索</button> -->
  </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    searchKey: String,
  },
  emits: ['update:searchKey'],
  data() {
    return {
      
    }
  },
  methods: {
    changeInputText(event) {
      this.$emit('update:searchKey', event.target.value)
    }
  }
}
</script>

<style>

</style>