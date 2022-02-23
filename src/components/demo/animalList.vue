<template>
  <div class="animalList-container">
    <ul>
      <li v-for="(item,index) in animalsList" :key="index"><a href="https://vuejs.org" target="_blank" rel="noopener">{{item.name}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'animalsList',
  props: {
    animalsList: Array
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>