<template>
    <CardLoadBalancer :loadBalancer="props.loadBalancers" />
</template>

<script setup lang="ts">

const props = defineProps({
  loadBalancers: { Type: Array, required: true }
});
</script>