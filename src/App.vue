<template>
  <div id="map"></div>
  <router-view/>
</template>

<script>
import mapUtils from '@/utils/amap';
// import { defineComponent } from '@vue/composition-api'

export default {
  mounted() {
    mapUtils.createMap({ id: 'map' })
    this.$https.apiGet({
      url: '/login',
    }).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
  }
}
</script>


<style lang="scss">
@import "./assets/iconfont/iconfont.css";
@import "app";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#map {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
