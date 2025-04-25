<template>
  <section class="page mx-3 lg:mx-auto bg-white text-black max-w-6xl px-3 py-3">
    <h3 class="font-bold text-lg mb-3">
      Volumes
    </h3>
    <div class="volume-list grid grid-cols-6 gap-3">
      <section v-for="(volume, index) in volumes" class="volume col-span-6 md:col-span-2">
        <div class="card card-primary" :class="{ 'bg-gray-400': true }">
          <div class="card-body py-2 px-2 flex items-center flex-row justify-between">
            <section class="flex items-center">
              <FontAwesomeIcon :icon="faServer" class="w-5 mr-3" color="blue" />
              <span>{{ volume.id }} - {{ volume.name }}</span>
            </section>
            <section class="actions space-x-3">
              <a :href="'/server/?id=' + volume.server" class="tooltip"
                :data-tip="'Server: '+volume.server + ' - ' + volume.size + ' GB - ' + volume.status">
                <FontAwesomeIcon :icon="faServer" class="w-5" color="blue" />
              </a>
              <a :href="'/volume/?id=' + volume.id">
                <FontAwesomeIcon :icon="faEye" class="w-5" color="blue" />
              </a>
              <a :href="'/volume/edit?id=' + volume.id">
                <FontAwesomeIcon :icon="faEdit" class="w-5" color="blue" />
              </a>
              <a :href="'/volume/delete?id=' + volume.id">
                <FontAwesomeIcon :icon="faTrash" class="w-5" color="blue" />
              </a>
            </section>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<script setup lang="ts">
import { faEdit, faEye, faServer, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useLocalStorage } from '@vueuse/core';

const volumes = ref([]);
const token = useLocalStorage('token', '', {})

const load = async () => {
  let response = await fetch('https://api.hetzner.cloud/v1/volumes', {
    headers: {
      'Authorization': `Bearer ${token.value}`,
      'Content-Type': 'application/json', // Optional, depends on the API
    },
  });
  volumes.value = (await response.json()).volumes;
}
onMounted(() => {
  load();
});
</script>