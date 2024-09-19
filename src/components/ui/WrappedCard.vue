<template>
  <v-card rounded="lg" flat :class="`bg-white px-4 py-2 h-100 ${className}`">
    <div class="d-flex flex-column h-100">
      <v-card-title>
        <h2 class="text-h5 font-weight-bold">{{ title }}</h2>
      </v-card-title>
      <slot name="content"></slot>
      <slot name="actions"></slot>
    </div>
  </v-card>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    className: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>
