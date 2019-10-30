import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Router from 'vue-router'
import Home from '@/components/Home'
import profile from '@/components/profile'
import languages from '@/components/languages'
import works from '@/components/works'

Vue.use(Router)
Vue.use(BootstrapVue)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/languages',
      name: 'languages',
      component: languages
    },
    {
      path: '/works',
      name: 'works',
      component: works
    }
  ]
})

export default router
