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

<style>
* {
  font-family: 'Poppins', sans-serif !important;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.color-white {
  color: white !important;
}
</style>
