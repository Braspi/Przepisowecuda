import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../components/HomeView.vue";
import ErrorView from "../components/Error/ErrorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:catchAll(.*)',
      name: 'errorView',
      component: ErrorView,
      props: {
        code: 404,
        message: 'Ta strona nie została odnaleziona!'
      }
    }
  ]
})

export default router
