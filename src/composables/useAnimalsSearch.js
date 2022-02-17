import { ref, computed } from 'vue';

/**
 * 搜索模块
 * @param {Array} animalsList 
 * @returns searchKey, animalSearchList
 */

function userAnimalsSearch(animalsList) {
  // 搜索
  const searchKey = ref('')
  const animalSearchList = computed(() => { // computed返回一个响应式引用
    return animalsList.value.filter(
      animal => animal.name.includes(searchKey.value)
    )
  })

  return {
    searchKey,
    animalSearchList,
  }
}

export default userAnimalsSearch