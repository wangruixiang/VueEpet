import Vue from 'vue'
import  Router from 'vue-router'

import header from '../components/header/header.vue'
import main from '../components/main/main.vue'
import brand_sale from '../components/brand_sale/brand_sale.vue'
import canned_market from '../components/canned_market/canned_market.vue'
import cat_food from '../components/cat_food/cat_food.vue'
import fashion_videos  from '../components/fashion_videos/fashion_videos.vue'
import meow_classroom   from '../components/meow_classroom/meow_classroom.vue'

Vue.use(Router)

export default new Router({
linkActiveClass:"active",
  routers:[
    {
      path:'/',
      redirect:'/main'
    },
    {
      path:'/',
      component:'/main'
    }, {
      path:'/',
      redirect:'/header'
    }, {
      path:'/',
      redirect:'/brand_sale'
    }, {
      path:'/',
      redirect:'/canned_market'
    }, {
      path:'/',
      redirect:'/cat_food'
    }, {
      path:'/',
      redirect:'/fashion_videos'
    }, {
      path:'/',
      redirect:'/meow_classroom'
    },
  ]
})
