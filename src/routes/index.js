import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('@/views/MainView.vue'),
  },
  {
    path: "/list",
    component: () => import('@/components/TheList.vue'),
  },
  {
    path: "/detail",
    component: () => import('@/views/DetailView.vue'),
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router; 