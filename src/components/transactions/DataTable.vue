<script lang="ts">
import { key } from '@/store';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore(key);

    const transactions = computed(() => store.state.transactions);

    const tableHeaders: Array<
      Record<string, any> & { align: 'start' | 'end' }
    > = [
      { title: 'Transactions', align: 'start', key: 'title' },
      { title: 'Price', align: 'start', key: 'price' },
    ];

    return {
      transactions,
      tableHeaders,
    };
  },
};
</script>
<template>
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
</template>
