<template>
  <div class="d-flex flex-column pa-6 pt-0 h-100 ga-4">
    <h1 class="text-h4 font-weight-bold">Welcome, User</h1>
    <div class="d-flex ga-4 flex-1-1-0">
      <v-card rounded="lg" flat class="flex-1-1-0 bg-white px-4 py-2">
        <div class="d-flex flex-column h-100">
          <v-card-title>
            <h2 class="text-h5 font-weight-bold">Money Left for this month</h2>
          </v-card-title>
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
        </div>
      </v-card>

      <v-card rounded="lg" flat class="flex-1-1-0 bg-white px-4 py-2">
        <div class="d-flex flex-column h-100">
          <v-card-title>
            <h2 class="text-h5 font-weight-bold">Objectives</h2>
          </v-card-title>
          <v-card-text class="flex-1-1-0 overflow-auto">
            <div
              v-for="{ title, costPerMonth, contribution } in objectives"
              :key="title"
              class="mb-6"
            >
              <div class="d-flex justify-space-between align-center mb-2">
                <span class="font-weight-bold text-body-1">{{ title }}</span>
                <span
                  >This Month's contribution: ${{ contribution }} / ${{
                    costPerMonth
                  }}</span
                >
              </div>
              <v-progress-linear
                color="pink-lighten-3"
                :model-value="
                  contribution === 0 ? 0 : (contribution / costPerMonth) * 100
                "
              ></v-progress-linear>
            </div>
          </v-card-text>
          <v-card-actions>
            <div class="d-flex justify-end w-100">
              <router-link to="/objectives">
                <v-btn
                  variant="outlined"
                  color="pink-lighten-1"
                  appendIcon="mdi-chevron-right"
                  >Go to Objectives</v-btn
                >
              </router-link>
            </div>
          </v-card-actions>
        </div>
      </v-card>
    </div>
    <div class="d-flex ga-4 flex-1-1-0">
      <v-card rounded="lg" flat class="flex-2-1-0 bg-white px-4 py-2 h-100">
        <div class="d-flex flex-column h-100">
          <v-card-title>
            <h2 class="text-h5 font-weight-bold">Savings</h2>
          </v-card-title>
          <v-card-text class="flex-1-1-0 overflow-auto">
            <div
              v-for="{ title, costPerMonth, contribution } in savings"
              :key="title"
              class="mb-6"
            >
              <div class="d-flex justify-space-between align-center mb-2">
                <span class="font-weight-bold text-body-1">{{ title }}</span>
                <span
                  >This Month's contribution: ${{ contribution }} / ${{
                    costPerMonth
                  }}</span
                >
              </div>
              <v-progress-linear
                color="pink-lighten-3"
                :model-value="
                  contribution === 0 ? 0 : (contribution / costPerMonth) * 100
                "
              ></v-progress-linear>
            </div>
          </v-card-text>
          <v-card-actions>
            <div class="d-flex justify-end w-100">
              <router-link to="/savings">
                <v-btn
                  variant="outlined"
                  color="pink-lighten-1"
                  appendIcon="mdi-chevron-right"
                  >Go to Savings</v-btn
                >
              </router-link>
            </div>
          </v-card-actions>
        </div>
      </v-card>

      <v-card rounded="lg" flat class="flex-1-1-0 bg-white px-4 py-2">
        <div class="d-flex flex-column h-100">
          <v-card-title>
            <h2 class="text-h5 font-weight-bold">Recent Transactions</h2>
          </v-card-title>
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
          <v-card-actions>
            <div class="d-flex justify-end w-100">
              <router-link to="/transactions">
                <v-btn
                  variant="outlined"
                  color="pink-lighten-1"
                  appendIcon="mdi-chevron-right"
                  >Go to Transactions</v-btn
                >
              </router-link>
            </div>
          </v-card-actions>
        </div>
      </v-card>
    </div>
  </div>
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
