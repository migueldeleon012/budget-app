<template>
  <div class="d-flex flex-column pa-6 pt-0 h-100 ga-4">
    <h1 class="text-h4 font-weight-bold">Welcome, User</h1>
    <div class="d-flex ga-4 flex-1-1-0">
      <wrapped-card className="flex-1-1-0" title="Money Left for this month">
        <v-card-text>
          <div class="d-flex justify-center mb-8">
            <Doughnut
              :data="doughnutChartData"
              class="mx-auto w-33 h-33"
            ></Doughnut>
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
        </v-card-text>
      </wrapped-card>

      <wrapped-card
        title="Objectives"
        className="flex-1-1-0"
        :data="objectives"
        :actions="{ path: '/objectives', title: 'Go to Objetives' }"
      ></wrapped-card>
    </div>
    <div class="d-flex ga-4 flex-1-1-0">
      <wrapped-card
        className="w-33"
        title="Savings"
        :data="savings"
        :actions="{ path: '/savings', title: 'Go to Savings' }"
      >
        <template #textWithProgress="{ contribution, costPerMonth }">
          <span> ${{ contribution }} / ${{ costPerMonth }} </span>
        </template>
      </wrapped-card>

      <wrapped-card
        title="Recent Transactions"
        className="flex-1-1-0"
        :actions="{ path: '/transactions', title: 'Go to Recent Transactions' }"
      >
        <v-card-text class="flex-1-1-0 overflow-auto">
          <div
            v-for="{ id, title, price, positive } in transactions"
            :key="id"
            class="mb-6 d-flex justify-space-between"
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
      </wrapped-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, registerables, type ChartData } from 'chart.js';
import { computed } from 'vue';
import WrappedCard from '@/components/ui/WrappedCard.vue';
import { useStore } from 'vuex';
import { key } from '@/store';

ChartJS.register(...registerables);

export default {
  components: {
    Doughnut,
    WrappedCard,
  },

  setup() {
    const store = useStore(key);

    const state = computed(() => store.state);

    const { transactions, savings, objectives, income } = state.value;

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
      objectives,
      savings,
      doughnutChartData,
    };
  },
};
</script>
