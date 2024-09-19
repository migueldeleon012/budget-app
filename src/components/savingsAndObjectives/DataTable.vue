<script lang="ts">
import { key } from '@/store';
import type { SavingsOrObjectives } from '@/store/state';
import { useStore } from 'vuex';

type Props = {
  data: SavingsOrObjectives[];
  openEditDialog: (item: SavingsOrObjectives) => void;
  isObjective?: boolean;
};

export default {
  props: ['data', 'isObjective', 'openEditDialog'],
  setup(props: Props) {
    const store = useStore(key);

    const tableHeaders: Array<
      Record<string, any> & { align: 'start' | 'end' }
    > = [
      { title: 'Objective', align: 'start', key: 'title' },
      { title: 'Cost Per Month', align: 'start', key: 'costPerMonth' },
      { title: 'Contribution', align: 'start', key: 'contribution' },
      { title: 'Actions', align: 'start', key: 'actions' },
    ];

    const del = (item: SavingsOrObjectives, isObjective?: boolean) => {
      store.commit(
        `${isObjective ? 'deleteObjectives' : 'deleteSavings'}`,
        item.id
      );
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
      <v-icon size="small" @click="del(item, isObjective)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>
