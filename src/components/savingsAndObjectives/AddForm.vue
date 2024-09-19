<script lang="ts">
import { key } from '@/store';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

type Props = {
  isObjectives?: boolean;
};

export default {
  setup(props: Props) {
    const store = useStore(key);
    const title = ref('');
    const costPerMonth = ref(0);

    const buttonDisabled = computed(() => !title.value || !costPerMonth.value);

    const add = (isObjectives?: boolean) => {
      store.commit(`${isObjectives ? 'addObjectives' : 'addSavings'}`, {
        title: title.value,
        costPerMonth: costPerMonth.value,
        contribution: 0,
      });
    };

    return { buttonDisabled, title, costPerMonth, add, ...props };
  },
};
</script>

<template>
  <v-form @submit.prevent="add(isObjectives)">
    <v-text-field v-model="title" label="Title" required></v-text-field>
    <v-text-field
      v-model="costPerMonth"
      label="Cost Per Month"
      type="number"
      required
    ></v-text-field>
    <v-btn :disabled="buttonDisabled" color="primary" type="submit">
      Add
    </v-btn>
  </v-form>
</template>
