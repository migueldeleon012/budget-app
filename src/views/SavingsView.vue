<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import type { SavingsOrGoals } from '@/store/state';
import AddForm from '@/components/savingsAndGoals/AddForm.vue';
import EditForm from '@/components/savingsAndGoals/EditForm.vue';
import DataTable from '@/components/savingsAndGoals/DataTable.vue';

export default {
  components: { AddForm, EditForm, DataTable },
  setup() {
    const store = useStore(key);
    const savings = computed(() => store.state.savings);

    // EDIT
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
      savings,
      selectedItem,
    };
  },
};
</script>

<template>
  <div class="d-flex flex-column pa-6 pt-0 h-100 ga-4">
    <h1 class="text-h4 font-weight-bold">Savings</h1>
    <DataTable :data="savings" :openEditDialog="openEditDialog" />

    <v-dialog v-model="editDialog" max-width="500px">
      <EditForm :itemToEdit="selectedItem" :closeEditDialog="closeEditDialog" />
    </v-dialog>

    <AddForm />
  </div>
</template>
