<template>
  <div class="flex flex-col items-center gap-4">
    <Reader />
    <Mnemonic @wallet="updateWallet"/>
    <Signer :wallet="wallet" v-if="wallet !== undefined"/>
  </div>
</template>

<script setup lang="ts">
import type { Wallet } from '@ethereumjs/wallet';
import type { Ref } from 'vue';
import { ref } from 'vue';

import Mnemonic from './components/Mnemonic.vue';
import Signer from './components/Signer.vue';
import Reader from './components/Reader.vue';
import Writer from './components/Writer.vue';

const wallet: Ref<Wallet | undefined> = ref(undefined);

function updateWallet(w: Wallet) {
  if (w === undefined) {
    return;
  }

  wallet.value = w;
}
</script>

