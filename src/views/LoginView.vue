<script lang="ts">
import BaseInput from '@/components/ui/BaseInput.vue';
import { key } from '@/store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  components: { BaseInput },
  setup() {
    const store = useStore(key);
    const router = useRouter();

    const userName = ref('');

    const login = () => {
      store.dispatch('login', userName.value);
      router.push({ name: 'dashboard' });
    };

    return { userName, login };
  },
};
</script>

<template>
  <div class="w-100 h-100 d-flex flex-column justify-center px-16">
    <div class="w-50">
      <div class="mb-8">
        <h1 class="text-h3 font-weight-bold">
          Welcome to <span color="deep-purple-4">Budgetfy</span>
        </h1>
        <h2 class="text-h5 mt-2">Budget your money, the good way!</h2>
      </div>
      <v-form @submit.prevent="login">
        <BaseInput class="input" type="text" v-model="userName" label="Name" />
        <v-btn
          :disabled="!userName"
          type="submit"
          color="deep-purple-darken-4"
          class="mt-2"
          >Login</v-btn
        >
      </v-form>
    </div>
  </div>
</template>
