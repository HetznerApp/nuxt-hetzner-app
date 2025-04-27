<template>
  <div class="divider divider-primary">
    Hardware
  </div>
  <section class="grid grid-cols-8 gap-3 mb-3">
    <div class="col-span-8 md:col-span-2">
      <div class="bg-gray-400 flex items-center justify-center px-3 py-3 flex-col rounded-lg">
        <FontAwesomeIcon :icon="faLayerGroup" class="w-5 mb-2" color="red" />
        <span class="headline">
          Type
        </span>
        <span v-if="server.server_type" class="number text-white text-lg font-bold">
          {{ server.server_type.name }}
        </span>
      </div>
    </div>
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
  </section>
</template>


<script lang="ts" setup>
import { faLayerGroup, faMemory, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  server: { type: Object, required: true }
})
</script>