<template>
  <div>
    <h3 class="text-lg">Bip39 Mnemonic</h3>
    <textarea
      name="mnemonic"
      class="border rounded border-1 border-black"
      id="mnemoic"
      cols="60"
      rows="5"
      v-model="mnemonic"
    ></textarea>
    <div v-if="wallet !== undefined">
      <WalletList :wallet="wallet" @wallet="(e) => $emit('wallet', e)"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watchEffect, ref } from 'vue';
import type { Ref } from 'vue';
import { validateMnemonic } from 'bip39';
import { hdkey } from '@ethereumjs/wallet';
import type { EthereumHDKey } from 'node_modules/@ethereumjs/wallet/dist/esm/hdkey';
import WalletList from './WalletList.vue';

const mnemonic = ref('');
const wallet: Ref<EthereumHDKey | undefined >= ref(undefined);

watchEffect(async () => {
  const v = mnemonic.value;

  if (!validateMnemonic(v)) {
    wallet.value = undefined;
    return;
  }

  wallet.value = hdkey.EthereumHDKey.fromMnemonic(v);
});
</script>
