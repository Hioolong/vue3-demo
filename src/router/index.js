import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Throttle from '../components/throttle.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clonedeep',
    name: 'cloneDeep',
    component: () => import(/* webpackChunkName: "clonedeep" */ '../views/CloneDeep.vue')
  },
  {
    path: '/debounce',
    name: 'debounce',
    component: () => import('../components/debounce.vue')
  },
  {
    path: '/throttle',
    name: 'throttle',
    component: Throttle
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
