<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Button from '../components/Button.vue';
import TextInput from '../components/TextInput.vue';
import { Customer } from '../schemas/customers';
import { useCounterStore } from '../stores/customers';
import Checkbox from 'primevue/checkbox';

const router = useRouter();
const route = useRoute();
const {
  params: { id },
} = route;

const store = useCounterStore();

const customer = ref(store.getCustomerById(id as string)) as Ref<Customer>;

const editCustomer = (customer: Customer) => {
  const isValid = store.validateCustomer(customer);
  if (isValid) {
    store.updateCustomerById(customer);
    router.push({ name: 'CustomerList' });
  }
};

const addNewProduct = () => {
  if (customer.value) {
    customer.value.products.push({ name: '', active: true });
  }
};
</script>

<template>
  <form
    v-if="customer"
    class="customer-form"
    @submit.prevent="editCustomer(customer)"
  >
    <h2>Cadastro de Cliente</h2>

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
      <Button type="submit">Editar Cliente</Button>
    </div>
  </form>
</template>

<style lang="scss" scoped src="./customer_form.scss"></style>
