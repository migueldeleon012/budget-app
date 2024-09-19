<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import AddForm from '@/components/transactions/AddForm.vue';
import DataTable from '@/components/transactions/DataTable.vue';

export default {
  components: { AddForm, DataTable },
};
</script>

<template>
  <div class="d-flex flex-column pa-6 pt-0 h-100 ga-4">
    <h1 class="text-h4 font-weight-bold">Transactions</h1>
    <DataTable />
    <AddForm />
  </div>
</template>
