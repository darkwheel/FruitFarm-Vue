import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from './views/home'
import Mint from './views/mint'
import Stake from './views/stake'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Mint',
      path: '/mint',
      component: Mint,
    },
    {
      name: 'Stake',
      path: '/stake',
      component: Stake,
    },
  ],
})
