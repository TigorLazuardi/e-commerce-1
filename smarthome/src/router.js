import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */'./views/Login.vue')
    }, {
      path: '/history',
      name: 'history',
      component: () => import(/* webpackChunkName: "transaction" */'./views/Transactions.vue')
    }
  ],

})

export default router