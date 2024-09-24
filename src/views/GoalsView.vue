<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import type { SavingsOrGoals } from '@/store/state';
import AddForm from '@/components/savingsAndGoals/AddForm.vue';
import DataTable from '@/components/savingsAndGoals/DataTable.vue';
import EditForm from '@/components/savingsAndGoals/EditForm.vue';

export default {
  components: { AddForm, EditForm, DataTable },
  setup() {
    const store = useStore(key);
    const goals = computed(() => store.state.goals);

    const editDialog = ref(false);
    const selectedItem = ref<SavingsOrGoals | null>(null);

    const openEditDialog = (item: SavingsOrGoals) => {
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
      goals,
      selectedItem,
    };
  },
};
</script>

<template>
  <div class="d-flex flex-column pa-6 pt-0 h-100 ga-4">
    <h1 class="text-h4 font-weight-bold">Goals</h1>
    <DataTable :data="goals" :isGoal="true" :openEditDialog="openEditDialog" />

    <v-dialog v-model="editDialog" max-width="500px">
      <EditForm
        :itemToEdit="selectedItem"
        :isGoal="true"
        :closeEditDialog="closeEditDialog"
      />
    </v-dialog>

    <AddForm :isGoal="true" />
  </div>
</template>
