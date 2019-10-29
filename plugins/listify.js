import Vue from 'vue'
import listify from 'listify'

Vue.filter('listify', (array, finalWord = 'and', separator = ', ') => {
  return listify(array, { separator, finalWord })
})
