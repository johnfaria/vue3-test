import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { Customer, CustomerSchema } from '../schemas/customers';
import { v4 as uuidv4 } from 'uuid';
import product from './data.json';

export const useCounterStore = defineStore('counter', () => {
  const customers: Ref<Customer[]> = ref(product);

  const validateCustomer = (customer: Customer) => {
    const result = CustomerSchema.safeParse(customer);
    return result.success;
  };

  const createCustomer = (customer: Customer) => {
    customers.value.push({ id: uuidv4(), ...customer });
  };

  const getCustomerById = (id: string) => {
    return customers.value.find((el) => el.id === id);
  };

  const updateCustomerById = (customer: Customer) => {
    let result = customers.value.find((el) => el.id === customer.id);
    if (result) {
      result = customer;
    }
  };

  const deleteCustomerById = (customer: Customer) => {
    const objIndex = customers.value.findIndex((obj) => obj.id === customer.id);
    if (objIndex > -1) {
      customers.value.splice(objIndex, 1);
    }
  };

  return {
    customers,
    createCustomer,
    validateCustomer,
    getCustomerById,
    updateCustomerById,
    deleteCustomerById,
  };
});
