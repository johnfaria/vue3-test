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
  background-color: #0b7ad1;
  color: #fff;
  text-transform: uppercase;

  &:hover {
    background-color: #7faaca;
    color: #fff;
  }
}
</style>
