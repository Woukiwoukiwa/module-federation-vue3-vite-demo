// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/remote-app-green',
    name: 'remote-app-green',
    component: () => import(/* webpackChunkName: "home" */ 'remote-app-green/GreenView'),
  },
  {
    path: '/remote-app-red',
    name: 'remote-app-red',
    component: () => import(/* webpackChunkName: "home" */ 'remote-app-red/RedView'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
