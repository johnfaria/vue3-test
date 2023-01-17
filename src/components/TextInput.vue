<script setup lang="ts">
defineProps<{
  modelValue: string;
  id: string;
  label: string;
}>();

defineEmits(['update:modelValue']);
</script>

<template>
  <div class="field">
    <label :for="id">{{ label }}:</label>
    <input
      :id="id"
      :name="id"
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style lang="scss" scoped>
.field {
  margin-bottom: 1rem;

  * {
    display: block;
  }

  label {
    font-size: 0.875rem;
  }

  input {
    height: 2rem;
    border: 1px solid #d8d3d3;
    border-radius: 0.5rem;
    padding-inline: 0.5rem;
  }
}
</style>
