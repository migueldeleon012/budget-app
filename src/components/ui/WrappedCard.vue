<template>
  <v-card rounded="lg" flat :class="`bg-white px-4 py-2 h-100 ${className}`">
    <div class="d-flex flex-column h-100">
      <v-card-title>
        <h2 class="text-h5 font-weight-bold">{{ title }}</h2>
      </v-card-title>
      <slot>
        <v-card-text class="flex-1-1-0 overflow-auto">
          <div
            v-for="{ title, costPerMonth, contribution } in data"
            :key="title"
            class="mb-6"
          >
            <text-with-progress
              :title="title"
              :contribution="contribution"
              :costPerMonth="costPerMonth"
            >
              <slot
                name="textWithProgress"
                :contribution="contribution"
                :costPerMonth="costPerMonth"
              ></slot>
            </text-with-progress>
          </div>
        </v-card-text>
      </slot>
      <v-card-actions v-if="actions?.path">
        <div class="d-flex justify-end w-100">
          <router-link :to="actions.path">
            <v-btn
              variant="outlined"
              color="pink-lighten-1"
              appendIcon="mdi-chevron-right"
              >{{ actions.title }}
            </v-btn>
          </router-link>
        </div>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import TextWithProgress from '@/components/ui/TextWithProgress.vue';

export default {
  components: { 'text-with-progress': TextWithProgress },
  props: {
    data: {
      type: Array,
      required: true,
    },
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
    actions: {
      type: Object,
      required: false,
    },
  },
};
</script>
