import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import aboutme from '@/components/aboutme.vue'
import education from '../components/chirdren/grandchirdren/education.vue'
import working from '../components/chirdren/grandchirdren/working.vue'
import contact from '@/components/contact.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: aboutme,
      children:[{
        path: '/aboutme',
        redirect: 'education'
      },
      {
        path: 'working',
        component: working
      },
      {
        path: 'education',
        name: education,
        component: education
      },
    ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
