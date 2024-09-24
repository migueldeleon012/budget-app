<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    className: {
      type: String,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    id: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
});
</script>
<template>
  <div :class="`d-flex flex-column ${className}`">
    <label v-if="label" :for="id">{{ label }}</label>

    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :class="`px-4 py-2 border-md rounded-lg bg-white border-black ${
        errorMessage && 'border-red'
      }`"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<style lang="css"></style>
