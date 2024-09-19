<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import type { SavingsOrObjectives } from '@/store/state';
import AddForm from '@/components/savingsAndObjectives/AddForm.vue';
import EditForm from '@/components/savingsAndObjectives/EditForm.vue';
import DataTable from '@/components/savingsAndObjectives/DataTable.vue';

export default {
  components: { AddForm, EditForm, DataTable },
  setup() {
    const store = useStore(key);
    const savings = computed(() => store.state.savings);

    // EDIT
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
      savings,
      selectedItem,
    };
  },
};
</script>

<template>
  <v-container>
    <DataTable :data="savings" :openEditDialog="openEditDialog" />

    <v-dialog v-model="editDialog" max-width="500px">
      <EditForm :itemToEdit="selectedItem" :closeEditDialog="closeEditDialog" />
    </v-dialog>

    <AddForm />
  </v-container>
</template>
