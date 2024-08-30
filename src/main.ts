import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store, { key } from './state';
import { vuetify } from './assets/vuetify';
const app = createApp(App);

app.use(router);
app.use(store, key);
app.use(vuetify);

app.mount('#app');
