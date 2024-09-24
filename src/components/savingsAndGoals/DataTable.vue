<script lang="ts">
import { key } from '@/store';
import type { SavingsOrGoals } from '@/store/state';
import { useStore } from 'vuex';

type Props = {
  data: SavingsOrGoals[];
  openEditDialog: (item: SavingsOrGoals) => void;
  isGoal?: boolean;
};

export default {
  props: ['data', 'isGoal', 'openEditDialog'],
  setup(props: Props) {
    const store = useStore(key);

    const tableHeaders: Array<
      Record<string, any> & { align: 'start' | 'end' }
    > = [
      { title: 'Goal', align: 'start', key: 'title' },
      { title: 'Cost Per Month', align: 'start', key: 'cost' },
      { title: 'Contribution', align: 'start', key: 'contribution' },
      { title: 'Actions', align: 'start', key: 'actions' },
    ];

    const del = (item: SavingsOrGoals, isGoal?: boolean) => {
      store.commit(`${isGoal ? 'deleteGoals' : 'deleteSavings'}`, item.id);
    };

    return { tableHeaders, del, ...props };
  },
};
</script>

<template>
  <v-data-table
    :headers="tableHeaders"
    :items="data"
    height="400"
    item-value="name"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon class="me-2" size="small" @click="openEditDialog(item)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="del(item, isGoal)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>
