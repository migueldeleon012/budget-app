import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
import LoginView from '@/views/LoginView.vue';
import DashboardView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'login', component: LoginView },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: () => import('../views/TransactionsView.vue'),
    },
    {
      path: '/goals',
      name: 'goals',
      component: () => import('../views/GoalsView.vue'),
    },
    {
      path: '/savings',
      name: 'savings',
      component: () => import('../views/SavingsView.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
    },
  ],
  linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
  const hasUser = store.state.userName;

  if (hasUser && to.name === 'login') {
    next({ name: 'dashboard' });
  }

  if (!hasUser && to.name !== 'login') {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
