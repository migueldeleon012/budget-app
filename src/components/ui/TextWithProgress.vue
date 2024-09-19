<template>
  <div class="d-flex justify-space-between align-center mb-2">
    <span class="font-weight-bold text-body-1">{{ title }}</span>
    <slot>
      <span> ${{ partial }} / ${{ total }} </span>
    </slot>
  </div>
  <v-progress-linear
    color="pink-lighten-3"
    :model-value="(partial / total) * 100"
  ></v-progress-linear>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    partial: {
      type: Number,
      required: true,
      default: 0,
    },
    total: {
      type: Number,
      required: true,
      default: 100,
    },
  },
};
</script>
