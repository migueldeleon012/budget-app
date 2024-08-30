<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field v-model="title" label="Title" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="price"
            label="Price"
            type="number"
            required
          ></v-text-field>
          <v-switch
            v-model="positive"
            label="Positive Cash Flow"
            type="boolean"
            required
          ></v-switch>
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
import { ref } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default {
  name: 'SavingsForm',
  setup() {
    const store = useStore(key);

    const title = ref('');
    const price = ref(0);
    const positive = ref(false);

    const submitForm = () => {
      store.commit('addTransactions', {
        id: crypto.randomUUID(),
        title: title.value,
        price: price.value,
        positive: positive.value,
      });
    };

    return {
      title,
      price,
      positive,
      submitForm,
    };
  },
};
</script>
