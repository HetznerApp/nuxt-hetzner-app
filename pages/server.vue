<template>
  <section class="page mx-3 lg:mx-auto bg-white text-black max-w-6xl px-3 py-3">
    <ServerHardware :server="server" />

    <hr> Protection
    <hr>
    <ServerImage :image="server.image" />
    <ServerNetwork :public_net="server.public_net" />
    <ServerDatacenter :location="server.datacenter" />
    <ServerPrices :server="server" />
    <ServerVolumesLoadBalancer :server="server" />
    <ServerTraffic :server="server" />
  </section>
</template>

<script lang="ts" setup>
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
