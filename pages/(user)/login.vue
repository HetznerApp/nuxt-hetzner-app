<template>
    <section class="page mx-3 lg:mx-auto bg-white text-black max-w-6xl px-3 py-3">
        <div class="form-control">
            <label for="" class="label mb-3">Token</label>
            <input type="password" v-model="token" class="input input-primary">
        </div>
    </section>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

const token = useLocalStorage('token', '', {})
const router = useRouter();

watch(token, ()=>{
    useTrackEvent('modify-token')
});

onMounted(() => {
    if (token.value != '') {
        router.push('/servers');
    }
});
</script>