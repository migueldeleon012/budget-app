<template>
  <v-container>
    <v-data-table
      :headers="tableHeaders"
      :items="objectives"
      height="400"
      item-value="name"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon class="me-2" size="small" @click="openEditDialog(item)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="deleteObjectives(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>

    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Add Contribution</span>
        </v-card-title>

        <v-text-field
          v-model="additionalContribution"
          label="Add Contribution"
          type="number"
          required
        ></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="closeEditDialog">
            Cancel
          </v-btn>
          <v-btn
            :disabled="!additionalContribution"
            color="blue-darken-1"
            variant="text"
            @click="editObjectives"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-form @submit.prevent="addObjectives">
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
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import type { SavingsOrObjectives } from '@/store/state';

export default defineComponent({
  name: 'SavingsForm',
  setup() {
    const store = useStore(key);
    const objectives = computed(() => store.state.objectives);

    const tableHeaders: Array<
      Record<string, any> & { align: 'start' | 'end' }
    > = [
      { title: 'Objective', align: 'start', key: 'title' },
      { title: 'Cost Per Month', align: 'start', key: 'costPerMonth' },
      { title: 'Contribution', align: 'start', key: 'contribution' },
      { title: 'Actions', align: 'start', key: 'actions' },
    ];

    const title = ref('');
    const costPerMonth = ref(0);

    const addObjectives = () => {
      store.commit('addObjectives', {
        title: title.value,
        contribution: 0,
        costPerMonth: costPerMonth.value,
      });
    };

    // EDIT
    const editDialog = ref(false);
    const additionalContribution = ref(0);
    const selectedItem = ref<SavingsOrObjectives | null>(null);

    const openEditDialog = (item: SavingsOrObjectives) => {
      selectedItem.value = item;
      editDialog.value = true;
    };

    const closeEditDialog = () => {
      editDialog.value = false;
    };

    const editObjectives = () => {
      if (!selectedItem.value) return;
      console.log(typeof additionalContribution.value);
      store.commit('editObjectives', {
        id: selectedItem.value.id,
        additionalContribution: +additionalContribution.value,
      });
      closeEditDialog();
    };

    // DELETE

    const deleteObjectives = (item: SavingsOrObjectives) => {
      store.commit('deleteObjectives', item.id);
    };

    return {
      editDialog,
      openEditDialog,
      closeEditDialog,
      objectives,
      tableHeaders,
      title,
      costPerMonth,
      additionalContribution,
      addObjectives,
      editObjectives,
      deleteObjectives,
    };
  },
});
</script>
