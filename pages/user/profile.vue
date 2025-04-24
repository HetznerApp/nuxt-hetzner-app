<template>
    <section class="page mx-3 lg:mx-auto bg-white text-black max-w-6xl px-3 py-3">
        User Profile
    </section>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

const token = useLocalStorage('token', '', {})
const router = useRouter();

onMounted(() => {
    if (token.value == '') {
        router.push('/login');
    }
});
</script>