<script lang="ts">
import { key } from '@/store';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

type Props = {
  isGoal?: boolean;
};

export default {
  setup(props: Props) {
    const store = useStore(key);
    const title = ref('');
    const cost = ref(0);

    const buttonDisabled = computed(() => !title.value || !cost.value);

    const add = () => {
      store.commit(`${props.isGoal ? 'addGoals' : 'addSavings'}`, {
        id: crypto.randomUUID(),
        title: title.value,
        cost: cost.value,
        contribution: 0,
      });
    };

    return { buttonDisabled, title, cost, add, ...props };
  },
};
</script>

<template>
  <v-form @submit.prevent="add">
    <v-text-field v-model="title" label="Title" required></v-text-field>
    <v-text-field
      v-model="cost"
      label="Cost Per Month"
      type="number"
      required
    ></v-text-field>
    <v-btn :disabled="buttonDisabled" color="primary" type="submit">
      Add
    </v-btn>
  </v-form>
</template>
