import { ref, onMounted, watch } from 'vue';
import { fetchAnimalsList } from '@/api/helloworld';

/**
 * 获取列表模块
 * @param {String} country 
 * @returns animalsList, getAnimalsList
 */

function userAnimalsList(country) {
  // 主功能-列表
  const animalsList = ref([])
  const getAnimalsList = async () => {
    animalsList.value = await fetchAnimalsList(country.value);
  }

  onMounted(getAnimalsList)
  watch(country, getAnimalsList) // watch不需要.value

  return {
    animalsList,
    getAnimalsList,
  }
}

export default userAnimalsList