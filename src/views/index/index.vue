<template>
  <div class="index-container">
    <SectionLeft/>
    <SectionRight/>
  </div>
</template>

<script>
import SectionLeft from './left.vue';
import SectionRight from './right.vue';
export default {
  components: {
    SectionLeft,
    SectionRight,
  }
}
</script>

<style>

</style>