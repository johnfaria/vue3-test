<script setup lang="ts">
import { useCounterStore } from '../stores/customers';
import { storeToRefs } from 'pinia';
import Button from '../components/Button.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const store = useCounterStore();
const { customers } = storeToRefs(store);

const createNewCustomer = () => {
  router.push({ name: 'CustomerCreate' });
};
</script>

<template>
  <div class="actions">
    <Button @click="createNewCustomer"> Criar Novo cliente </Button>
  </div>

  <div class="customers-list">
    {{ customers }}
  </div>
</template>

<style lang="scss" scoped>
// styles
</style>
