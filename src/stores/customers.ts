import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { Customer, CustomerSchema } from '../schemas/customers';
import { v4 as uuidv4 } from 'uuid';

export const useCounterStore = defineStore('counter', () => {
  const customers: Ref<Customer[]> = ref([
    {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      name: 'Jon Doe',
      email: 'jondoe@email.com',
      active: true,
      products: [],
    },
  ]);

  const validateCustomer = (customer: Customer) => {
    const result = CustomerSchema.safeParse(customer);
    return result.success;
  };

  const createCustomer = (customer: Customer) => {
    customers.value.push({ id: uuidv4(), ...customer });
  };

  return { customers, createCustomer, validateCustomer };
});
