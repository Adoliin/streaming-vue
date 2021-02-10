import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import PageNotFound from '@/views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: Home,
  },
  {
    path: '/page/:number',
    name: 'OtherPage',
    component: Home,
  },
  {
    path: '/actor/:name',
    name: 'ActorPage',
    component: Home,
    children: [
      {
        path: ':number',
        name: 'ActorPage',
        component: Home,
      },
    ]
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
]

const router = new VueRouter({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
