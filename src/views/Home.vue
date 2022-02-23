<template>
  <div class="home">
    <AppHeader></AppHeader>
 
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
import AppHeader from './header/index.vue';

export default {
  name: 'Home',
  components: {
    AppHeader,
  },
}
</script>

