<template>
  <div class="filter-container">
    <label>过滤：</label>
    <select class="select" name="country" id="country" v-model="type">
      <option value="" disabled selected>{{"请选择"}}</option>
      <option value="all" >{{"全部"}}</option>
      <option v-for="item in types" :key="item" :value="item">{{item}}</option>
    </select>
    <button class="btn-search" @click="filter">搜 索</button>
  </div>
</template>

<script>
export default {
  name: 'filter-component',
  props: {
    filters: {
      type: Object,
      default: () => {
        return {
          type: ''
        }
      }
    },
  },
  emits: ['update:filters'],
  data() {
    return {
      types: [
        'pig', 'dog', 'chicken'
      ],
      type: '',
    }
  },
  methods: {
    filter() {
      this.$emit('update:filters', { type: this.type=='all'? '' : this.type })
    }
  }
}
</script>

<style>

</style>