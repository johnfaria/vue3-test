import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './routes/index';
import './style.scss';

const pinia = createPinia();
const app = createApp(App);

app.use(PrimeVue);
app.use(pinia);
app.use(router);

app.mount('#app');
