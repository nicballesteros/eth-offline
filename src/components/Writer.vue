<template>
  <div>
    <button @click="showQR = !showQR" class="border-1 border border-black rounded p-1"
      >QR</button>
    <div class="fixed" v-if="showQR">
      <VueQRcode :value="data" :color="{ dark: '#000'}" type="image/png"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueQRcode, { type QRCodeValue } from 'vue-qrcode';

const props = defineProps(['data']);
const data = props.data as QRCodeValue;

const showQR = ref(false);
</script>
