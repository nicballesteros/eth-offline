<template>
  <div class="flex flex-col items-center gap-2">
    <div class="flex">
      <button class="border border-1 border-black hover:border-2 rounded p-1 mt-2"
        @click="() => showReader = !showReader">Toggle QR Reader</button>
    </div>
    <div v-if="showReader">
      <QrcodeStream @detect="onDetect"/>
      <p><b>Data:</b> {{ data }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QrcodeStream } from 'vue-qrcode-reader';
import type { DetectedBarcode } from 'barcode-detector/pure';

const showReader = ref(false);
const data = ref('');

function onDetect(d: DetectedBarcode[]) {
  const [rd] = d;

  data.value = rd.rawValue;
}
</script>
