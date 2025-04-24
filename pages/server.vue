<template>
  <div>
    Server Page
  </div>
</template>

<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const token = useLocalStorage('token', '', {})

onMounted(() => {
  if (!route.query.id) {
    router.push('/servers');
  }
  if (token.value == '') {
    router.push('/login');
  }
});
</script>

<style></style>