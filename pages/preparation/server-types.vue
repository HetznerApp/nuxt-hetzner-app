<template>
  <section class="page mx-3 lg:mx-auto bg-white text-black max-w-6xl px-3 py-3">
    <section class="grid grid-cols-6 gap-3">
      <div v-for="types in serverTypes" class="col-span-6 md:col-span-2">
        <section class="card">
          <figure>
            <img src="https://place-hold.it/640x360?text=Server&fontsize=30" alt="">
          </figure>
          <div class="card-body">
            <p class="text-sm block text-center">
              Prices
              <br>
            </p>
            <section class="grid grid-cols-6 gap-3">
              <div class="col-span-6 md:col-span-3 bg-gray-400 rounded-lg h-16 flex items-center justify-center">
                {{ types.storage_type }} Festplatte
              </div>
              <div class="col-span-6 md:col-span-3 bg-gray-400 rounded-lg h-16 flex items-center justify-center">
                {{ types.cpu_type }} Architektur
              </div>
            </section>
            <section class="numbers">
              <section class="grid grid-cols-6 gap-3">
                <div class="col-span-6 md:col-span-2 text-center flex justify-center">
                  <div class="bg-gray-400 rounded-lg w-24 items-center px-3 py-3">{{ types.cores }} Kerne</div>
                </div>
                <div class="col-span-6 md:col-span-2 text-center flex justify-center">
                  <div class="bg-gray-400 rounded-lg w-24 items-center px-3 py-3">{{ types.memory }} GB</div>
                </div>
                <div class="col-span-6 md:col-span-2 text-center flex justify-center">
                  <div class="bg-gray-400 rounded-lg w-24 items-center px-3 py-3">{{ types.disk }} GB</div>
                </div>
              </section>
            </section>
          </div>
        </section>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core';
import { useRouter } from 'vue-router';
import { useHetzner } from '~/util/hetzner';

const router = useRouter();
const token = useLocalStorage('token', '', {})
const serverTypes = useLocalStorage('server_types', [], {});

onMounted(() => {
  if (token.value == '') {
    router.push('/login');
  }
});
const load = async () => {
  if (serverTypes.value == null || serverTypes.value.length < 1) {
    serverTypes.value = (await useHetzner('server_types')).server_types;
  }
}
onMounted(() => {
  load();
});
</script>
