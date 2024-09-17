<template>f
  <v-container>
    <v-data-table-virtual
      :headers="tableHeaders"
      :items="savings"
      height="400"
      item-value="name"
    ></v-data-table-virtual>
    <v-form @submit.prevent="submitForm">
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field v-model="title" label="Title" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="costPerMonth"
            label="Cost Per Month"
            type="number"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn color="primary" type="submit"> Add </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
  name: 'SavingsForm',
  setup() {
    const store = useStore(key);
    const savings = store.state.savings;

    const tableHeaders: Array<
      Record<string, any> & { align: 'start' | 'end' }
    > = [
      { title: 'Objective', align: 'start', key: 'title' },
      { title: 'Cost Per Month', align: 'start', key: 'costPerMonth' },
      { title: 'Contribution', align: 'start', key: 'contribution' },
    ];

    const title = ref('');
    const costPerMonth = ref(0);

    const submitForm = () => {
      store.commit('addSavings', {
        title: title.value,
        contribution: 0,
        costPerMonth: costPerMonth.value,
      });
    };

    return {
      title,
      tableHeaders,
      savings,
      costPerMonth,
      submitForm,
    };
  },
});
</script>
