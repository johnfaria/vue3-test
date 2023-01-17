<script setup lang="ts">
import { useCounterStore } from '../stores/customers';
import { storeToRefs } from 'pinia';
import Button from '../components/Button.vue';
import { useRouter } from 'vue-router';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const router = useRouter();
const store = useCounterStore();

const { customers } = storeToRefs(store);

const createNewCustomer = () => {
  router.push({ name: 'CustomerCreate' });
};
</script>

<template>
  <div class="page">
    <div class="actions">
      <Button @click="createNewCustomer"> Criar Novo cliente </Button>
    </div>

    <div class="customers-list">
      <DataTable :value="customers">
        <Column field="name" header="Nome"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="active" header="Cliente Ativo?"></Column>
      </DataTable>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: grid;
  row-gap: 2rem;
}
</style>
