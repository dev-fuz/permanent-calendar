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
    path: '/doa',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Doa',
        component: () => import(/* webpackChunkName: "home" */ '@/views/DoaView.vue'),
      },
    ],
  },
  {
    path: '/hadith',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'hadith',
        component: () => import(/* webpackChunkName: "home" */ '@/views/HadithView.vue'),
      },
    ],
  },
  {
    path: '/quran',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'quran',
        component: () => import('@/views/QuranView.vue'),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
