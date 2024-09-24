<script lang="ts">
import { key } from '@/store';
import type { SavingsOrGoals } from '@/store/state';
import { ref } from 'vue';
import { useStore } from 'vuex';

type Props = {
  itemToEdit: SavingsOrGoals | null;
  isGoal?: boolean;
  closeEditDialog: () => void;
};

export default {
  props: ['itemToEdit', 'isGoal', 'closeEditDialog'],
  setup(props: Props) {
    const store = useStore(key);
    const additionalContribution = ref(0);

    const { itemToEdit, closeEditDialog, isGoal } = props;

    const edit = () => {
      if (!itemToEdit) return;
      store.commit(`${isGoal ? 'editGoals' : 'editSavings'}`, {
        id: itemToEdit.id,
        additionalContribution: +additionalContribution.value,
      });
      closeEditDialog();
    };

    return { additionalContribution, isGoal, edit, closeEditDialog };
  },
};
</script>

<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Add Contribution</span>
    </v-card-title>

    <v-text-field
      v-model="additionalContribution"
      label="Add Contribution"
      type="number"
      required
    ></v-text-field>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue-darken-1" variant="text" @click="closeEditDialog">
        Cancel
      </v-btn>
      <v-btn
        :disabled="!additionalContribution"
        color="blue-darken-1"
        variant="text"
        @click="edit"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
