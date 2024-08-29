<template>
  <h1 class="text-h4 font-weight-bold">Welcome, User</h1>
  <v-container class="d-flex ga-4">
    <v-card rounded="lg" flat class="flex-1-1-0 bg-white px-4 py-2">
      <v-card-title>
        <h2 class="text-h5 font-weight-bold">Money Left for this month</h2>
      </v-card-title>
      <v-card-text>
        <div class="d-flex justify-center mb-8">
          <Doughnut :data="chartData" class="mx-auto w-50 h-50"></Doughnut>
        </div>
        <p class="text-h-6">
          {{ moneyLeft }}
        </p>
      </v-card-text>
    </v-card>

    <v-card rounded="lg" flat class="flex-1-1-0 bg-white px-4 py-2">
      <v-card-title>
        <h2 class="text-h5 font-weight-bold">Objectives</h2>
      </v-card-title>
      <v-card-text> Iphone 55000 </v-card-text>
    </v-card>
  </v-container>
  <v-container class="d-flex ga-4">
    <v-card rounded="lg" flat class="flex-1-1-0 bg-white px-4 py-2">
      <v-card-title>
        <h2 class="text-h5 font-weight-bold">Total Savings</h2>
      </v-card-title>
      <v-card-text>
        <div class="d-flex justify-center mb-8"></div>
        <p class="text-h-6">Wants</p>
      </v-card-text>
    </v-card>

    <v-card rounded="lg" flat class="flex-2-1-0 bg-white px-4 py-2">
      <v-card-title>
        <h2 class="text-h5 font-weight-bold">Recent Transactions</h2>
      </v-card-title>
      <v-card-text> Iphone 55000 </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, registerables } from 'chart.js';
import { computed, ref } from 'vue';

ChartJS.register(...registerables);

export default {
  components: { Doughnut },

  setup() {
    const income = ref(28000);
    const spent = ref(10000);
    const moneyLeft = computed(() => income.value - spent.value);

    return {
      income,
      moneyLeft,
      chartData: {
        labels: ['Spent', 'To Spend'],
        datasets: [{ data: [spent, moneyLeft] }],
      },
    };
  },
};
</script>
