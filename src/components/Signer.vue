<template>
  <div class="space-y-2">
    <h2 class="text-xl">Sign Message</h2>
    <div class="flex justify-between gap-2">
      <input type="text" id="message"
        v-model="message"
        class="border-1 border border-black rounded p-1 w-max"
      >
      <button class="border border-1 border-black px-2 rounded hover:border-2" @click="signMessage">Sign</button>
    </div>
    <div v-if="output !== ''" class="flex items-center">
      <p>Output: {{ output }}</p>
      <Writer :data="output"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ecsign, toRpcSig, hexToBytes } from '@ethereumjs/util';
import { ref, computed } from 'vue';
import Writer from './Writer.vue';
import type {Wallet} from '@ethereumjs/wallet';

const props = defineProps(['wallet']);
const wallet = computed(() => props.wallet as Wallet | undefined);

const message = ref('');
const output = ref('');

function signMessage() {
  if (wallet.value === undefined) {
    return;
  }

  const { r, s, v } = ecsign(Buffer.from(hexToBytes(message.value)), wallet.value.getPrivateKey());

  output.value = toRpcSig(v, r, s);
}
</script>
