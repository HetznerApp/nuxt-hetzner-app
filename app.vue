<template>
  <section class="bg-blue-400">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </section>
</template>

<script setup lang="ts">
import './app.css'

onMounted(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }
})
</script>
