<template>
  <div v-for="lb in props.loadBalancer" class="col-span-4 md:col-span-2">
    <section class="card rounded-none bg-gray-400">
      <figure>
        <img src="https://place-hold.it/640x360?text=Load+Balancer&fontsize=30" alt="">
      </figure>
      <div class="card-body">
        LB
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  loadBalancer: { type: Array, required: true }
});
</script>