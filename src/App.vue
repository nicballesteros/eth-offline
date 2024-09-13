<template>
  <div class="flex flex-col items-center gap-4 mb-12">
    <Reader />
    <Mnemonic @wallet="updateWallet"/>
    <Signer :wallet="wallet" v-if="wallet !== undefined"/>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { ref } from 'vue';

import Mnemonic from './components/Mnemonic.vue';
import Signer from './components/Signer.vue';
import Reader from './components/Reader.vue';
import type { Wallet } from '@ethereumjs/wallet';

let wallet: Ref<Wallet | undefined> = ref(undefined);

function updateWallet(w: Wallet) {
  wallet.value = w;
}
</script>

