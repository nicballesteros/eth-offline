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

    <div class="flex items-center gap-2">
      <h3>Addresses</h3>
      <button class="p-1 border border-1 border-black rounded hover:border-2"
        @click="hidePrivate = !hidePrivate">Toggle Show Private</button>
    </div>
    <div v-for="wallet in wallets" :key="wallet.getPrivateKeyString()"
      class="flex justify-between align-items-center hover:cursor-pointer gap-2"
    >
      <input type="radio" :value="wallet" v-model="selectedWallet">
      <p @click="() => selectedWallet = wallet">{{ wallet.getAddressString() }}</p>
      <Writer :data="wallet.getAddressString()"/>
      <p @click="() => selectedWallet = wallet"
        v-if="!hidePrivate">{{ wallet.getPrivateKeyString() }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Wallet } from '@ethereumjs/wallet';
import type { EthereumHDKey } from 'node_modules/@ethereumjs/wallet/dist/esm/hdkey';
import type { Ref } from 'vue';
import { ref, computed, defineEmits, watchEffect } from 'vue';
import Writer from './Writer.vue';

const emit = defineEmits(['wallet']);

const purpose = ref(44);
const coinType = ref(60);
const account = ref(0);
const change = ref(0);
const addressIndex = ref(0);

const hidePrivate = ref(false);

const derivationPath = computed(() => `m/${purpose.value}'/${coinType.value}'/${account.value}'/${change.value}/${addressIndex.value}`);

const props = defineProps(['wallet']);
const wallet = props.wallet as EthereumHDKey;

const numAddresses = ref(10);
const selectedWallet: Ref<Wallet | undefined> = ref(undefined);

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

watchEffect(() => {
  // nextTick(() => {
    if (selectedWallet.value === undefined) {
      return;
    }

    console.log(selectedWallet.value?.getPrivateKeyString());

    emit('wallet', selectedWallet.value);
  // });
});
</script>
