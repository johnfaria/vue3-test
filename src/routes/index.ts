import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CustomerList from '../pages/CustomerList.vue';
import CustomerCreate from '../pages/CustomerCreate.vue';
import CustomerEdit from '../pages/CustomerEdit.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: CustomerList, name: 'CustomerList' },
  {
    path: '/customers/create',
    component: CustomerCreate,
    name: 'CustomerCreate',
  },
  {
    path: '/customers/:id',
    component: CustomerEdit,
    name: 'CustomerEdit',
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
