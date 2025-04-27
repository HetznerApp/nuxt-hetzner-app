<template>
  <section class="page mx-3 lg:mx-auto bg-white text-black max-w-6xl px-3 py-3">
    <section class="grid grid-cols-6 gap-3">
      <div v-for="location in load_balancer_types" class="col-span-6 md:col-span-2">
        <section class="card bg-gray-400">
          <figure>
            <img src="https://place-hold.it/640x360?text=LoadBalancerTypes&fontsize=30" alt="">
          </figure>
          <div class="card-body">
            <p class="text-sm block text-center">
              {{ location }}<br>
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
const load_balancer_types = useLocalStorage('load_balancer_types', [], {});

onMounted(() => {
  if (token.value == '') {
    router.push('/login');
  }
});
const load = async () => {
  if(load_balancer_types.value === null || load_balancer_types.value.length < 1) {
    load_balancer_types.value = (await useHetzner('load_balancer_types')).load_balancer_types;

  }
}
onMounted(() => {
  load();
});
</script>
