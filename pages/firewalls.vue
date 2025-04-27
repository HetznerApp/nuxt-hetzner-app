<template>
  <section class="page mx-3 lg:mx-auto bg-white text-black max-w-6xl px-3 py-3">
    {{ firewalls.length }}
    <section class="grid grid-cols-6 gap-3">
      <div v-for="datacenter in firewalls" class="col-span-6 md:col-span-2">
        <section class="card">
          <figure>
            <img src="https://place-hold.it/640x360?text=Datacenter&fontsize=30" alt="">
          </figure>
          <div class="card-body">
            <p class="text-sm">
              {{ datacenter }}<br>
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
const firewalls = useLocalStorage('firewalls', [], {});

onMounted(() => {
  if (token.value == '') {
    router.push('/login');
  }
});
const load = async () => {
  if (firewalls.value === null || firewalls.value.length < 1) {
    firewalls.value = (useHetzner('firewalls')).firewalls;
  }
}
onMounted(() => {
  load();
});
</script>
