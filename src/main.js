/**
 * 入口js文件
 */
import vue from 'vue'

import router from  './router'

import app from './app.vue'


new vue({
  el:'#app',
  render:h => h(app),
  router
})
