<template>
  <div class="home">
    <AppHeader></AppHeader>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <select class="select" name="country" id="country" v-model="country">
      <option value="" disabled selected>{{"请选择"}}</option>
      <option value="all" >{{"全部"}}</option>
      <option v-for="item in countries" :key="item" :value="item">{{item}}</option>
    </select>
    <HelloWorld msg="Vue3 Demo App" :country="country" /> -->


    <router-view/>

    <!-- 
      <router-view> can no longer be used directly 
      inside <transition> or <keep-alive>.
      Use slot props instead 
    -->

    <!-- <transition name="screen">
      <router-view/>
    </transition> -->

    <!-- <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AppHeader from './header/index.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    AppHeader,
  },
  data() {
    return {
      // country: '',
      // countries: ['China', 'JP', 'USA', 'England',]
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  min-width: 100px;
  color: #000;
}
</style>
