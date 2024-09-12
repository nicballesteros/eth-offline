import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQrcodeReader, setZXingModuleOverrides } from 'vue-qrcode-reader';
import wasmFile from '../zxing_reader.wasm?url';
import App from './App.vue';

setZXingModuleOverrides({
  locateFile: (path: string, prefix: string) => {
    if (path.endsWith('.wasm')) {
      return wasmFile;
    }

    return prefix + path;
  }
});

const app = createApp(App)

app.use(createPinia())
app.use(VueQrcodeReader);

app.mount('#app')
