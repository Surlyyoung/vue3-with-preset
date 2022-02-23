<template>
  <div class="demo-page">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <select class="select" name="country" id="country" v-model="country">
      <option value="" disabled selected>{{"请选择"}}</option>
      <option value="all" >{{"全部"}}</option>
      <option v-for="item in countries" :key="item" :value="item">{{item}}</option>
    </select>
    <HelloWorld msg="Vue3 Demo App" :country="country" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      country: '',
      countries: ['China', 'JP', 'USA', 'England',]
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-page {
  position: relative;
  .select {
    min-width: 100px;
    color: #000;
  }
}
</style>