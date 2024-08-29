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
              <p class="text-h5 font-weight-bold">$ {{ moneyLeft }}</p>
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
            v-for="{ id, name, price, positive } in transactions"
            :key="id"
            class="mb-6 d-flex justify-space-between"
          >
            <p class="text-body-1 font-weight-bold">{{ name }}</p>
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

<script>
import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, registerables } from 'chart.js';
import { computed, ref } from 'vue';
import WrappedCard from '../components/ui/WrappedCard.vue';

ChartJS.register(...registerables);

export default {
  components: {
    Doughnut,
    WrappedCard,
  },

  setup() {
    const income = ref(28000);
    const spent = ref(10000);
    const moneyLeft = computed(() => income.value - spent.value);

    return {
      income,
      spent,
      moneyLeft,
      doughnutChartData: {
        labels: ['Spent', 'To Spend'],
        datasets: [{ data: [spent, moneyLeft] }],
      },
      objectives: [
        {
          title: 'IPhone',
          contribution: 250,
          costPerMonth: 500,
        },
        {
          title: 'Macbook',
          contribution: 300,
          costPerMonth: 1000,
        },
      ],
      savings: [
        {
          title: 'Wedding',
          contribution: 250,
          costPerMonth: 500,
        },
        {
          title: 'Vacation',
          contribution: 300,
          costPerMonth: 1000,
        },
      ],
      transactions: [
        { id: 1, name: 'Phone Case', price: 980, positive: false },
        { id: 12, name: 'Salary', price: 28000, positive: true },
        { id: 13, name: 'Lunch', price: 1200, positive: false },
        { id: 14, name: 'Coffee', price: 580, positive: false },
      ],
    };
  },
};
</script>
