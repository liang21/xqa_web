import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/pages/home/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

router.afterEach((to, from) => {
  Nprogress.done()
})
export default router
