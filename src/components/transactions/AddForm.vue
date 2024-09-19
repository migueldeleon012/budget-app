<script lang="ts">
import { key } from '@/store';
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore(key);

    const title = ref('');
    const price = ref(0);
    const positive = ref(false);

    const addTransactions = () => {
      store.commit('addTransactions', {
        id: crypto.randomUUID(),
        title: title.value,
        price: +price.value,
        positive: positive.value,
      });
    };

    return { title, price, positive, addTransactions };
  },
};
</script>

<template>
  <v-form @submit.prevent="addTransactions">
    <v-text-field v-model="title" label="Title" required></v-text-field>
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
    <v-btn color="primary" type="submit"> Add </v-btn>
  </v-form>
</template>
