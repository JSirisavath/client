import { createApp } from 'vue';
import App from './App.vue';

import StateAPIService from './services/stateServices';

import router from './router';

// Make our state api service from state services global to our vue app
let app = createApp(App);
app.config.globalProperties.$stateServices = StateAPIService;

app.use(router); // Routes to the states pages

app.mount('#app');
