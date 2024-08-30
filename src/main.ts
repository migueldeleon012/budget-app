import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './state';
import { vuetify } from './assets/vuetify';
const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);

app.mount('#app');
