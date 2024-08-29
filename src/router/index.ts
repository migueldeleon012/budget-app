import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: () => import('../views/TransactionsView.vue'),
    },
    {
      path: '/objectives',
      name: 'objectives',
      component: () => import('../views/ObjectivesView.vue'),
    },
    {
      path: '/savings',
      name: 'savings',
      component: () => import('../views/SavingsView.vue'),
    },
  ],
  linkActiveClass: 'active',
});

export default router;
