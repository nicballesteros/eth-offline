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
import type { Wallet } from '@ethereumjs/wallet';
import { ref } from 'vue';
import Writer from './Writer.vue';

const props = defineProps(['wallet']);
const wallet = props.wallet as Wallet;

const message = ref('');
const output = ref('');

function signMessage() {
  const { r, s, v } = ecsign(Buffer.from(hexToBytes(message.value)), wallet.getPrivateKey());
  console.log(wallet.getPrivateKeyString());

  output.value = toRpcSig(v, r, s);
}
</script>
