<script lang="ts">
import { useRoute } from 'vue-router';
import Sidebar from './components/TheSidebar.vue';
import { ref, watch } from 'vue';

export default {
  components: {
    Sidebar,
  },
  setup() {
    const route = useRoute();
    const showSidebar = ref(true);

    watch(
      () => route.path,
      (newPath) => {
        if (newPath === '/') {
          showSidebar.value = false;
        } else {
          showSidebar.value = true;
        }
      },
      { immediate: true }
    );

    return {
      showSidebar,
    };
  },
};
</script>

<template>
  <v-app>
    <Sidebar v-if="showSidebar" />
    <v-main>
      <v-container fluid class="bg-grey-lighten-3 h-100">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

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
.border-black {
  border-color: #424242 !important;
}
.border-red {
  border-color: #c62828 !important;
}
</style>
