import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage, name: 'HomePage' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
