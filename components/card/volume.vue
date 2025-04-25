<template>
  <div class="col-span-4 md:col-span-2">
    <section class="card rounded-none bg-gray-400">
      <figure>
        <img src="https://place-hold.it/640x360?text=Volume&fontsize=30" alt="">
      </figure>
      <div class="card-body">
        <p>Format: {{ volume.format}} - {{ volume.size}} GB - {{ volume.status}}</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core';

const props = defineProps({
  volume: { type: Object, required: true }
});

const volume = ref({});

const token = useLocalStorage('token', '', {})

const load = async () => {
  let response = await fetch('https://api.hetzner.cloud/v1/volumes/' + props.volume, {
    headers: {
      'Authorization': `Bearer ${token.value}`,
      'Content-Type': 'application/json',
    },
  });

  volume.value = (await response.json()).volume;
}

onMounted(() => {
  load();
});
</script>