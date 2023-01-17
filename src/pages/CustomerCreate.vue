<script setup lang="ts">
import { useCounterStore } from '../stores/customers';
import TextInput from '../components/TextInput.vue';
import { ref } from 'vue';
import Button from '../components/Button.vue';
import { Customer } from '../schemas/customers';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useCounterStore();

const customer = ref<Customer>({
  name: '',
  email: '',
  active: false,
  products: [],
});

const createNewCustomer = (customer: Customer) => {
  const isValid = store.validateCustomer(customer);
  if (isValid) {
    store.createCustomer(customer);
    router.push({ name: 'HomePage' });
  }
};

const addNewProduct = () => {
  customer.value.products.push({ name: '', active: true });
};
</script>

<template>
  <form class="customer-form" @submit.prevent="createNewCustomer(customer)">
    <TextInput id="name" v-model="customer.name" label="Nome" type="text" />
    <TextInput id="name" v-model="customer.email" label="Email" type="email" />

    <div v-if="customer.products.length" class="product-input-group">
      <div
        v-for="(product, index) in customer.products"
        :key="`product-${index}`"
        class="product-field"
      >
        <TextInput
          id="name"
          v-model="product.name"
          label="Nome do Produto"
          type="text"
        />
      </div>
    </div>
    <div class="actions">
      <Button @click="addNewProduct">Adicionar novo produto</Button>
      <Button type="submit">Criar novo cliente</Button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.field * {
  display: block;
}

.customer-form {
  display: grid;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px #0003;

  .product-input-group {
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 2px 4px #0003;
  }

  .actions {
    display: flex;
    justify-content: space-between;
  }
}
</style>
