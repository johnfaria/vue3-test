import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import CustomerCreate from '../pages/CustomerCreate.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage, name: 'HomePage' },
  {
    path: '/customers/create',
    component: CustomerCreate,
    name: 'CustomerCreate',
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
