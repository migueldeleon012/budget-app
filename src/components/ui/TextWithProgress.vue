<template>
  <div class="d-flex justify-space-between align-center mb-2">
    <span class="font-weight-bold text-body-1">{{ title }}</span>
    <slot>
      <span>
        This Month's contribution: ${{ contribution }} / ${{ costPerMonth }}
      </span>
    </slot>
  </div>
  <v-progress-linear
    color="pink-lighten-3"
    :model-value="(contribution / costPerMonth) * 100"
  ></v-progress-linear>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    contribution: {
      type: Number,
      required: false,
      default: 0,
    },
    costPerMonth: {
      type: Number,
      required: false,
      default: 100,
    },
  },
};
</script>
