<template>
  <div>
    <button @click="showQR = !showQR" class="border-1 border border-black rounded p-1"
      >QR</button>
    <Teleport to="body">
      <div class="fixed top-0 right-0 w-screen h-screen bg-black" v-if="showQR">
        <div class="flex flex-col items-center gap-2">
          <VueQRcode :value="data" :color="{ dark: '#000'}" type="image/png" class="w-1/3"/>
          <button class="bg-white text-black py-1 px-2 rounded" @click="() => showQR = false">Close</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueQRcode, { type QRCodeValue } from 'vue-qrcode';

const props = defineProps(['data']);
const data = props.data as QRCodeValue;

const showQR = ref(false);
</script>
