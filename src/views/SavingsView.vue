<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
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
import { defineComponent, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
  name: 'SavingsForm',
  setup() {
    const store = useStore(key);

    const title = ref('');
    const costPerMonth = ref(0);

    const submitForm = () => {
      store.commit('addSavings', {
        title: title.value,
        contribution: 0,
        costPerMonth: costPerMonth.value,
      });
    };

    return {
      title,
      costPerMonth,
      submitForm,
    };
  },
});
</script>
