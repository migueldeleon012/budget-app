<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import OverviewCard from '@/components/home/OverviewCard.vue';
import SavingsObejctivesCard from '@/components/home/SavingsGoalsCard.vue';
import TransactionsCard from '@/components/home/TransactionsCard.vue';

export default {
  components: {
    OverviewCard,
    SavingsObejctivesCard,
    TransactionsCard,
  },

  setup() {
    const store = useStore(key);

    const state = computed(() => store.state);

    const { transactions, savings, goals, userName } = state.value;

    return {
      transactions,
      goals,
      savings,
      userName,
    };
  },
};
</script>

<template>
  <div class="d-flex flex-column pa-6 pt-0 h-100 ga-4">
    <h1 class="text-h4 font-weight-bold">Welcome, {{ userName }}</h1>
    <div class="d-flex ga-4 flex-1-1-0">
      <OverviewCard />
      <SavingsObejctivesCard
        className="flex-1-1-0"
        title="Goals"
        :data="goals"
        :actions="{ title: 'Go to Goals', path: '/goals' }"
      />
    </div>
    <div class="d-flex ga-4 flex-1-1-0">
      <SavingsObejctivesCard
        className="w-33"
        title="Savings"
        :data="savings"
        :actions="{ title: 'Go to Savings', path: '/savings' }"
      />
      <TransactionsCard />
    </div>
  </div>
</template>
