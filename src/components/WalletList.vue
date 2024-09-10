<template>
  <div class="space-y-2">
    <h4 class="text-normal">Path</h4>
    <div class="flex justify-start gap-2">
      <input
        type="number"
        v-model="purpose"
        class="border rounded border-1 border-black p-1 w-12"
      />
      <input
        type="number"
        v-model="coinType"
        class="border rounded border-1 border-black p-1 w-12"
      />
      <input
        type="number"
        v-model="account"
        class="border rounded border-1 border-black p-1 w-12"
      />
      <input
        type="number"
        v-model="change"
        class="border rounded border-1 border-black p-1 w-12"
      />
      <input
        type="number"
        v-model="addressIndex"
        class="border rounded border-1 border-black p-1 w-12"
      />
    </div>
    <p>Derivation Path: {{ derivationPath }}</p>
    <h4>Number of addresses</h4>
    <input type="number" class="border border-1 border-black rounded p-1" v-model="numAddresses">
    <h3>Addresses</h3>
    <div v-for="wallet in wallets" :key="wallet.getPrivateKeyString()" class="">
      hi
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Wallet } from '@ethereumjs/wallet';
import type { EthereumHDKey } from 'node_modules/@ethereumjs/wallet/dist/esm/hdkey';
import type { Ref } from 'vue';
import { watchEffect } from 'vue';
import { ref, computed } from 'vue';

const purpose = ref(44);
const coinType = ref(60);
const account = ref(0);
const change = ref(0);
const addressIndex = ref(0);

const derivationPath = computed(() => `m/${purpose.value}'/${coinType.value}'/${account.value}'/${change.value}/${addressIndex.value}`);

const props = defineProps(['wallet']);
const wallet = props.wallet as EthereumHDKey;

const numAddresses = ref(20);

let wallets: Ref<Wallet[]> = ref([]);

watchEffect(() => {
  let max = numAddresses.value;
  let address = addressIndex.value;

  wallets.value = [];

  for (let i = 0; i < max; i += 1) {
    const dPath = `m/${purpose.value}'/${coinType.value}'/${account.value}'/${change.value}/${address + i}`;

    wallets.value.push(wallet.derivePath(dPath).getWallet());
  }
});
</script>
