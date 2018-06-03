import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'index'
    },
    {
      path:'/index',
      name:'index',
      component:_import('index')

    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
