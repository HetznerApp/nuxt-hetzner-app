<template>
  <sectin class="grid grid-cols-6 gap-3 my-6">
    <div v-if="props.location" class="col-span-6 md:col-span-2">
      {{ props.location.description }}
      <hr>
      {{ props.location.location.city }}
      <hr>
      {{ props.location.location.country }}
      <hr>
      {{ props.location.location.latitude }}
      <hr>
      {{ props.location.location.longitude }}
      <hr>
      {{ props.location.location.network_zone }}
    </div>
  </sectin>
</template>

<script setup lang="ts">
const props = defineProps({
  location: { Type: Object, required: true }
});
</script>