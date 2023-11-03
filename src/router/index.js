import { createWebHistory, createRouter } from "vue-router";
import DashboardView from '../views/Dashboard.vue'
  const routes =  [
    {
    path: "/",
    name: 'login',
    component: () => import('../components/LoginForm.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  linkActiveClass: 'active'
})



export default router;