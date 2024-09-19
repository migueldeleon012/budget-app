<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import type { SavingsOrObjectives } from '@/store/state';
import AddForm from '@/components/savingsAndObjectives/AddForm.vue';
import DataTable from '@/components/savingsAndObjectives/DataTable.vue';
import EditForm from '@/components/savingsAndObjectives/EditForm.vue';

export default {
  components: { AddForm, EditForm, DataTable },
  setup() {
    const store = useStore(key);
    const objectives = computed(() => store.state.objectives);

    const editDialog = ref(false);
    const selectedItem = ref<SavingsOrObjectives | null>(null);

    const openEditDialog = (item: SavingsOrObjectives) => {
      selectedItem.value = item;
      editDialog.value = true;
    };

    const closeEditDialog = () => {
      editDialog.value = false;
    };

    return {
      editDialog,
      openEditDialog,
      closeEditDialog,
      objectives,
      selectedItem,
    };
  },
};
</script>

<template>
  <div class="d-flex flex-column pa-6 pt-0 h-100 ga-4">
    <h1 class="text-h4 font-weight-bold">Objectives</h1>
    <DataTable
      :data="objectives"
      :isObjective="true"
      :openEditDialog="openEditDialog"
    />

    <v-dialog v-model="editDialog" max-width="500px">
      <EditForm
        :itemToEdit="selectedItem"
        :isObjective="true"
        :closeEditDialog="closeEditDialog"
      />
    </v-dialog>

    <AddForm :isObjective="true" />
  </div>
</template>
