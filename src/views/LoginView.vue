<script lang="ts">
import BaseInput from '@/components/ui/BaseInput.vue';
import BaseSelect from '@/components/ui/BaseSelect.vue';
import { key } from '@/store';
import type { UserInfo } from '@/store/state';
import { computed, ref, type ComputedRef } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  components: { BaseInput, BaseSelect },
  setup() {
    const store = useStore(key);
    const router = useRouter();

    const currencyOptions = ref([
      { value: 'EUR', text: 'EUR' },
      { value: 'USD', text: 'USD' },
      { value: 'PHP', text: 'PHP' },
    ]);

    const userName = ref('');
    const income = ref(0);
    const selectedCurrency = ref('');

    const payload: ComputedRef<UserInfo> = computed(() => ({
      userName: userName.value,
      income: +income.value,
      selectedCurrency: selectedCurrency.value,
    }));

    const login = () => {
      store.dispatch('login', payload.value);
      console.log(payload);
      router.push({ name: 'dashboard' });
    };

    return { userName, income, selectedCurrency, currencyOptions, login };
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
        <div class="d-flex flex-column ga-4">
          <p class="text-body-1">To start, please enter the following:</p>
          <div class="d-flex ga-4 w-66">
            <BaseInput
              className="w-100"
              type="text"
              v-model="userName"
              label="Name"
              required
            />
            <BaseInput
              className="w-100"
              type="number"
              v-model="income"
              label="Income"
              required
            />
          </div>
          <BaseSelect
            className="w-50"
            label="Select Currency"
            v-model="selectedCurrency"
            :options="currencyOptions"
          />
        </div>
        <v-btn
          :disabled="!userName || !income || !selectedCurrency"
          type="submit"
          color="deep-purple-darken-4"
          class="mt-4"
          >Login</v-btn
        >
      </v-form>
    </div>
  </div>
</template>
