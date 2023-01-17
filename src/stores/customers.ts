import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const customers = ref([
    {
      id: 1,
      name: 'Jon Doe',
      email: 'jondoe@email.com',
      active: true,
    },
  ]);

  return { customers };
});
