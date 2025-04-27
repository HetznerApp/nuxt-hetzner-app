<template>
  <section class="page mx-3 lg:mx-auto bg-white text-black max-w-6xl px-3 py-3">
    <section class="grid grid-cols-6 gap-3">
      <div v-for="location in locations" class="col-span-6 md:col-span-2">
        <section class="card">
          <figure>
            <img src="https://place-hold.it/640x360?text=Locations&fontsize=30" alt="">
          </figure>
          <div class="card-body">
            <p class="text-sm">
              {{ location.city }}<br>
              {{ location.country }}<br>
              {{ location.latitude }}<br>
              {{ location.longitude }}<br>
              {{ location.network_zone }}<br>
              <br>
            </p>
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
const locations = useLocalStorage('locations', [], {});

onMounted(() => {
  if (token.value == '') {
    router.push('/login');
  }
});
const load = async () => {
  if (locations.value === null || locations.value.length < 1) {
    locations.value = (await useHetzner('locations')).locations;
  }
}
onMounted(() => {
  load();
});
</script>
