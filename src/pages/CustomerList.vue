<script setup lang="ts">
import { useCounterStore } from '../stores/customers';
import { storeToRefs } from 'pinia';
import Button from '../components/Button.vue';
import { useRouter } from 'vue-router';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { ref } from 'vue';

const router = useRouter();
const store = useCounterStore();

const { customers } = storeToRefs(store);

const goToCreateNewCustomerPage = () => {
  router.push({ name: 'CustomerCreate' });
};

const goToCustomerEditPage = (id: string) => {
  router.push({ path: `customers/${id}` });
};

const expandedRows = ref([]);
</script>

<template>
  <div class="page">
    <div class="actions">
      <Button @click="goToCreateNewCustomerPage"> Criar Novo cliente </Button>
    </div>

    <div class="customers-list">
      <DataTable v-model:expandedRows="expandedRows" :value="customers">
        <Column :expander="true" header-style="width: 3rem" />
        <Column field="name" header="Nome"></Column>
        <Column field="email" header="Email"></Column>
        <Column
          field="active"
          header="Cliente Ativo?"
          data-type="boolean"
          body-class="text-center"
        >
          <template #body="{ data }">
            <div v-if="data.active">Sim</div>
            <div v-else>Não</div>
          </template>
        </Column>
        <Column :exportable="false">
          <template #body="slotProps">
            <div class="column-actions">
              <Button @click="goToCustomerEditPage(slotProps.data.id)">
                Editar Cliente
              </Button>
              <Button @click="store.deleteCustomerById(slotProps.data)">
                Deletar Cliente
              </Button>
            </div>
          </template>
        </Column>
        <template #expansion="slotProps">
          <DataTable :value="slotProps.data.products">
            <Column field="name" header="Nome do Produto"></Column>
            <Column
              field="active"
              header="Produto Ativo?"
              data-type="boolean"
              body-class="text-center"
            >
              <template #body="{ data }">
                <div v-if="data.active">Sim</div>
                <div v-else>Não</div>
              </template>
            </Column>
          </DataTable>
        </template>
      </DataTable>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: grid;
  row-gap: 2rem;
}

.column-actions {
  display: flex;
  justify-content: space-around;
}
</style>
