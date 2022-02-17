<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul> -->
    <h3 v-closeModel="doSomething">Animal List</h3>
    <!-- <AnimalsSearch :searchKey="searchKey" @update:searchKey="searchKey = $event"></AnimalsSearch> -->
    <AnimalsSearch v-model:searchKey="searchKey"></AnimalsSearch>
    <AnimalsFilter v-model:filters="filters"></AnimalsFilter>
    <AnimalsList :animalsList="animalsList"></AnimalsList>
  </div>
</template>

<script>
import { toRefs } from 'vue';
import useAnimalsList from '@/composables/useAnimalsList';
import useAnimalsSearch from '@/composables/useAnimalsSearch';
import useAnimalsFilter from '@/composables/useAnimalsFilter';

import AnimalsList from '../components/animal/animalList.vue';
import AnimalsSearch from '../components/animal/search.vue';
import AnimalsFilter from '../components/animal/filter.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    country: String,
  },
  data() {
    return {
      
    }
  },
  components: {
    AnimalsList,
    AnimalsSearch,
    AnimalsFilter,
  },
  setup(props) {

    const { country } = toRefs(props) // toRefs解构的同时 保留country的响应式引用

    const { animalsList, getAnimalsList } = useAnimalsList(country)

    const { searchKey, animalSearchList } = useAnimalsSearch(animalsList)

    const { filters, animalFilterList } = useAnimalsFilter(animalSearchList)

    return {
      animalsList: animalFilterList,
      getAnimalsList,

      searchKey,

      filters,
    }
  },
  methods: {
    doSomething() {
      console.log('v-closeModel work!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
