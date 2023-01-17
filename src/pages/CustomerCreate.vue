<script setup lang="ts">
import { useCounterStore } from '../stores/customers';
import TextInput from '../components/TextInput.vue';
import { ref } from 'vue';
import Button from '../components/Button.vue';
import { Customer } from '../schemas/customers';
import { useRouter } from 'vue-router';
import Checkbox from 'primevue/checkbox';

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
    router.push({ name: 'CustomerList' });
  }
};

const addNewProduct = () => {
  customer.value.products.push({ name: '', active: true });
};
</script>

<template>
  <form class="customer-form" @submit.prevent="createNewCustomer(customer)">
    <h2 class="title">Cadastro de Cliente</h2>
    <TextInput
      id="name"
      v-model="customer.name"
      label="Nome do cliente"
      type="text"
    />
    <TextInput
      id="name"
      v-model="customer.email"
      label="Email do cliente"
      type="email"
    />

    <div class="field-checkbox">
      <Checkbox v-model="customer.active" input-id="binary" :binary="true" />
      <label for="binary">Cliente Ativo?</label>
    </div>

    <div v-if="customer.products.length" class="product-input-group">
      <h3 class="subtitle">Cadastro de Produtos</h3>
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

        <div class="field-checkbox">
          <Checkbox v-model="product.active" input-id="binary" :binary="true" />
          <label for="binary">Produto Ativo?</label>
        </div>
      </div>
    </div>
    <div class="actions">
      <Button @click="addNewProduct">Adicionar novo produto</Button>
      <Button type="submit">Criar novo cliente</Button>
    </div>
  </form>
</template>

<style lang="scss" scoped src="./customer_form.scss"></style>
