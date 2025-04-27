<template>
  <div class="divider divider-primary">
    Volumes and Load Balancers
  </div>
  <section class="grid grid-cols-8 gap-3 my-6">
    <ServerVolumes :volumes="props.server.volumes" />
    <ServerLoadBalancer :load-balancers="props.server.load_balancers" />
  </section>
</template>

<script lang="ts" setup>
const props = defineProps({
  server: { type: Object, required: true }
})
</script>