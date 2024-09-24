<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    className: { type: String },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    options: {
      type: Array as () => Array<{ value: string | number; text: string }>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(_, { emit }) {
    const updateValue = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      emit('update:modelValue', target.value);
    };

    return { updateValue };
  },
});
</script>

<template>
  <div :class="`d-flex flex-column ${className}`">
    <label v-if="label">{{ label }}</label>
    <select
      :value="modelValue"
      @change="updateValue"
      class="px-4 py-2 border-md rounded-lg bg-white border-black"
    >
      <option disabled value="">Please select</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<style></style>
