import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { Customer } from '@/schemas/customers';

export const useCounterStore = defineStore('counter', () => {
  const customers: Ref<Customer[]> = ref([
    {
      id: 1,
      name: 'Jon Doe',
      email: 'jondoe@email.com',
      active: true,
    },
  ]);

  return { customers };
});
