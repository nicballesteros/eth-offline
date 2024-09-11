import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQrcodeReader } from 'vue-qrcode-reader';
import App from './App.vue';

const app = createApp(App)

app.use(createPinia())
app.use(VueQrcodeReader);

app.mount('#app')
