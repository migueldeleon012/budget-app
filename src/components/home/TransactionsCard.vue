<script lang="ts">
import WrappedCard from '../ui/WrappedCard.vue';
import TextWithProgress from '../ui/TextWithProgress.vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { computed } from 'vue';

export default {
  components: { WrappedCard },
  setup() {
    const store = useStore(key);
    const transactions = computed(() => store.state.transactions);

    return { transactions };
  },
};
</script>

<template>
  <wrapped-card title="Recent Transactions" className="flex-1-1-0">
    <template #content>
      <v-card-text class="flex-1-1-0 overflow-auto">
        <div
          v-for="{ title, positive, price } in transactions"
          :key="title"
          class="d-flex justify-space-between mb-4"
        >
          <p class="text-body-1 font-weight-bold">{{ title }}</p>
          <p
            :class="`text-body-1 ${
              positive ? 'text-green-lighten-1' : 'text-red-lighten-1'
            }`"
          >
            {{ positive ? '' : '-' }}${{ price }}
          </p>
        </div>
      </v-card-text>
    </template>
    <template #actions>
      <div class="d-flex justify-end w-100">
        <router-link to="/transactions">
          <v-btn
            variant="outlined"
            color="pink-lighten-1"
            appendIcon="mdi-chevron-right"
          >
            Go to Transactions
          </v-btn>
        </router-link>
      </div>
    </template>
  </wrapped-card>
</template>
