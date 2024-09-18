<template>
  <v-container>
    <v-data-table
      :headers="tableHeaders"
      :items="transactions"
      height="400"
      item-value="name"
    >
      <template v-slot:item.price="{ item }">
        <p
          :class="`text-body-1 ${
            item.positive ? 'text-green-lighten-1' : 'text-red-lighten-1'
          }`"
        >
          {{ item.positive ? '' : '-' }}${{ item.price }}
        </p>
      </template>
    </v-data-table>

    <v-form @submit.prevent="addTransactions">
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field v-model="title" label="Title" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="price"
            label="Price"
            type="number"
            required
          ></v-text-field>
          <v-switch
            v-model="positive"
            label="Positive Cash Flow"
            type="boolean"
            required
          ></v-switch>
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
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default {
  setup() {
    const store = useStore(key);

    const transactions = computed(() => store.state.transactions);

    const title = ref('');
    const price = ref(0);
    const positive = ref(false);

    const tableHeaders: Array<
      Record<string, any> & { align: 'start' | 'end' }
    > = [
      { title: 'Transactions', align: 'start', key: 'title' },
      { title: 'Price', align: 'start', key: 'price' },
      { title: 'Actions', align: 'start', key: 'actions' },
    ];

    const addTransactions = () => {
      store.commit('addTransactions', {
        id: crypto.randomUUID(),
        title: title.value,
        price: price.value,
        positive: positive.value,
      });
    };

    return {
      title,
      price,
      positive,
      transactions,
      tableHeaders,
      addTransactions,
    };
  },
};
</script>
