import { ref, computed } from 'vue';

/**
 * 过滤模块
 * @param {Array} animalsList 
 * @returns filters, animalFilterList
 */

function userAnimalsFilter(animalsList) {
  // 过滤
  const filters = ref({  })
  const animalFilterList = computed(() => { // computed返回一个响应式引用
    let list = [];
    
    // 类型
    let type = filters.value.type || ''
    list = animalsList.value.filter(
      animal => animal.name.includes(type)
    )

    return list
  })

  return {
    filters,
    animalFilterList,
  }
}

export default userAnimalsFilter