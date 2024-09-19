<script lang="ts">
import { Doughnut } from 'vue-chartjs';
import WrappedCard from '../ui/WrappedCard.vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { computed } from 'vue';
import { Chart as ChartJS, registerables, type ChartData } from 'chart.js';

export default {
  components: { WrappedCard, Doughnut },
  setup() {
    ChartJS.register(...registerables);

    const store = useStore(key);

    const state = computed(() => store.state);

    const { transactions, income } = state.value;

    const spent = computed(() =>
      transactions
        .filter((transaction) => !transaction.positive)
        .reduce((acc, transaction) => acc + transaction.price, 0)
    );

    const moneyLeft = computed(() => income - spent.value);

    const doughnutChartData: ChartData<'doughnut', number[], unknown> = {
      labels: ['Spent', 'To Spend'],
      datasets: [{ data: [spent.value, moneyLeft.value] }],
    };

    return {
      income,
      spent,
      transactions,
      doughnutChartData,
    };
  },
};
</script>

<template>
  <wrapped-card className="flex-1-1-0" title="Money Left for this month">
    <template #content>
      <v-container class="h-100 d-flex justify-space-between flex-column pa-0">
        <div class="d-flex justify-center mb-8">
          <Doughnut :data="doughnutChartData" class="mx-auto"></Doughnut>
        </div>
        <div class="d-flex ga-16 justify-center">
          <div>
            <p class="text-subtitle-1">You Earn</p>
            <p class="text-h5 font-weight-bold">$ {{ income }}</p>
          </div>
          <div>
            <p class="text-subtitle-1">You Spent</p>
            <p class="text-h5 font-weight-bold">$ {{ spent }}</p>
          </div>
          <div>
            <p class="text-subtitle-1">You still have</p>
            <p class="text-h5 font-weight-bold">$ {{ income - spent }}</p>
          </div>
        </div>
      </v-container>
    </template>
  </wrapped-card>
</template>
