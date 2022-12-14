import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
const routes: Array<RouteRecordRaw> = [
  { 
    path: '/', 
    redirect: '/home' 
  },
  {
    path: '/home',
    name:"Home",
    component: () => import('@/pages/Home.vue'),
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router