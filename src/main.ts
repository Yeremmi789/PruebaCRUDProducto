import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Usa el enrutador
app.use(router);

app.mount('#app');
