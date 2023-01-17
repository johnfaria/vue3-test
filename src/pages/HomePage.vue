<script setup lang="ts">
import { useCounterStore } from '../stores/customers';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
const { customers } = storeToRefs(store);
</script>

<template>
  <div>{{ customers }}</div>
</template>
