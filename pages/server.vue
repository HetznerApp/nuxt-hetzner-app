<template>
  <section class="page mx-3 lg:mx-auto bg-white text-black max-w-6xl px-3 py-3">
    {{ server }}
    <section class="grid grid-cols-8 gap-3">
      <div class="col-span-8 md:col-span-2">
        <div class="bg-gray-400 flex items-center justify-center px-3 py-3 flex-col rounded-lg">
          <FontAwesomeIcon :icon="faMicrochip" class="w-5 mb-2" color="red" />
          <span class="headline">
            CPU
          </span>
          <span v-if="server.server_type" class="number text-white text-lg font-bold">
            {{ server.server_type.cores }} Kerne
          </span>
        </div>
      </div>
      <div class="col-span-8 md:col-span-2">
        <div class="bg-gray-400 flex items-center justify-center px-3 py-3 flex-col rounded-lg">
          <FontAwesomeIcon :icon="faMemory" class="w-5 mb-2" color="red" />
          <span class="headline">
            RAM
          </span>
          <span v-if="server.server_type" class="number text-white text-lg font-bold">
            {{ server.server_type.memory }} GB
          </span>
        </div>
      </div>
      <div class="col-span-8 md:col-span-2">
        <div class="bg-gray-400 flex items-center justify-center px-3 py-3 flex-col rounded-lg">
          <FontAwesomeIcon :icon="faMicrochip" class="w-5 mb-2" color="red" />
          <span class="headline">
            HardDrive
          </span>
          <span v-if="server.server_type" class="number text-white text-lg font-bold">
            {{ server.server_type.disk }} GB
          </span>
        </div>
      </div>
      <div class="col-span-8 md:col-span-2">
        <div class="bg-gray-400 flex items-center justify-center px-3 py-3 flex-col rounded-lg">
          <FontAwesomeIcon :icon="faMicrochip" class="w-5 mb-2" color="red" />
          <span class="headline">
            CPU
          </span>
          <span class="number text-white text-lg font-bold">
            4 Kerne
          </span>
        </div>
      </div>
    </section>
    <ServerImage :server="server" />
    <ServerNetwork :server="server" />
  </section>
</template>

<script lang="ts" setup>
import { faMemory, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useLocalStorage } from '@vueuse/core';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const token = useLocalStorage('token', '', {})
const server = ref({});
const servers = ref([]);

onMounted(() => {
  if (!route.query.id) {
    router.push('/servers');
  }
  if (token.value == '') {
    router.push('/login');
  }
});
const load = async () => {
  let response = await fetch('https://api.hetzner.cloud/v1/servers', {
    headers: {
      'Authorization': `Bearer ${token.value}`,
      'Content-Type': 'application/json',
    },
  });
  servers.value = (await response.json()).servers;
  server.value = servers.value.find((server) => server.id == route.query.id)
}
onMounted(() => {
  load();
});
</script>
