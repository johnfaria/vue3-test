<script setup lang="ts">
//
</script>

<template>
  <button class="btn" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #8282df;
  color: #fff;

  &:hover {
    border: 1px solid #8282df;
    background-color: #fff;
    color: #8282df;
  }
}
</style>
