import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { router } from './routes/index';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';

const pinia = createPinia();
const app = createApp(App);

app.use(PrimeVue);
app.use(pinia);
app.use(router);

app.mount('#app');
