<template>
  <v-navigation-drawer :rail="rail">
    <v-container class="pa-0 h-100 d-flex flex-column bg-deep-purple-darken-4">
      <v-container class="pa-0">
        <v-list-item title="a"></v-list-item>
        <v-divider></v-divider>
      </v-container>
      <v-container
        :class="`d-flex flex-column flex-1-1-0 ga-4 ${rail && 'pa-0 pt-4'}`"
      >
        <router-link
          v-for="item in navigationItems"
          :key="item.title"
          :to="item.href"
          :class="`d-flex ga-1 text-decoration-none pa-2 color-white rounded-sm ${
            !rail ? 'justify-start' : 'justify-center'
          }`"
        >
          <v-icon :icon="item.icon" size="1.5rem"></v-icon>
          <p v-if="!rail" class="text-body-1">{{ item.title }}</p>
        </router-link>
      </v-container>
      <v-container class="pa-0 pb-4 d-flex justify-center">
        <v-btn
          :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
          size="large"
          variant="plain"
          @click="toggleRail"
        ></v-btn>
      </v-container>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const rail = ref(false);

    const toggleRail = () => {
      rail.value = !rail.value;
    };

    return {
      rail,
      navigationItems: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', href: '/' },
        { title: 'Transactions', icon: 'mdi-cash', href: '/transactions' },
        {
          title: 'Savings',
          icon: 'mdi-piggy-bank-outline',
          href: '/savings',
        },
        {
          title: 'Objectives',
          icon: 'mdi-trophy-outline',
          href: '/objectives',
        },
      ],
      toggleRail,
    };
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.active {
  background: rgba(255, 255, 255, 0.2);
}
.sidebar-footer {
  margin: 0 auto;
  padding: 1rem 0;
}
</style>
