<template>
  <sectin class="grid grid-cols-6 gap-3 my-6">
      <div class="col-span-6 md:col-span-2">
        {{ props }}
      </div>
  </sectin>
</template>

<script setup lang="ts">
const props = defineProps({
  location: { Type: Object, required: true }
});
</script>