/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import VueTheMask from 'vue-the-mask'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

const app = createApp(App);

registerPlugins(app);

app.use(VCalendar, {});
app.use(VueTheMask);


app.mount('#app');
