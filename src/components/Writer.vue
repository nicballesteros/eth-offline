<template>
  <div>
    <button @click="showQR = !showQR" class="border-1 border border-black rounded p-1"
      >QR</button>
    <div class="fixed" v-if="showQR">
      <VueQRcode :value="data"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueQRcode from 'vue-qrcode';

const { data } = defineProps(['data']);

const showQR = ref(false);
</script>
