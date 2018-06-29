import Vue from 'vue'
import Router from 'vue-router'
import NewLists from '@/components/NewLists'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewLists',
      component: NewLists
    }
  ]
})
