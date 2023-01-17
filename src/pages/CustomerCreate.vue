<script setup lang="ts">
import { useCounterStore } from '../stores/customers';
import TextInput from '../components/TextInput.vue';
import { ref } from 'vue';
import Button from '../components/Button.vue';
import { Customer } from '../schemas/customers';
import { useRouter } from 'vue-router';
const router = useRouter();

const store = useCounterStore();

const customer = ref({
  name: '',
  email: '',
  active: false,
});

const createNewCustomer = (customer: Customer) => {
  const isValid = store.validateCustomer(customer);
  if (isValid) {
    store.createCustomer(customer);
    router.push({ name: 'HomePage' });
  }
};
</script>

<template>
  <form class="customer-form" @submit.prevent="createNewCustomer(customer)">
    <TextInput id="name" v-model="customer.name" label="Nome" type="text" />
    <TextInput id="name" v-model="customer.email" label="Email" type="email" />
    <div field>
      <label for="">Cliente Ativo?: </label>
      <input v-model="customer.active" type="checkbox" />
    </div>
    <Button type="submit">Criar Cliente</Button>
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
}
</style>
