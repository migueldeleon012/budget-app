import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store, { key } from './store';
import { vuetify } from './assets/vuetify';
import startDailyCheck from './utils';
const app = createApp(App);

app.use(router);
app.use(store, key);
app.use(vuetify);

app.mount('#app');

startDailyCheck();
