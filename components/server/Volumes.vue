<template>
    <CardVolume :volume="volume" v-for="volume in props.volumes" />
</template>
<script setup lang="ts">
const props = defineProps({
  volumes: { Type: Object, required: true }
});
</script>