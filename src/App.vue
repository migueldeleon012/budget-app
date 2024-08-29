<template>
  <v-app>
    <Sidebar />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/TheSidebar.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>
