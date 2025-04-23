<template>
    <section v-if="open" class=" sm:hidden mt-3 mx-3 lg:mx-auto bg-white px-3 py-3">
        <section class="grid grid-cols-6 gap-3">
            <div class="col-span-3">
                <a href="/" class="btn btn-primary btn-block">
                    Startseite
                </a>
            </div>
            <div class="col-span-3">
                <a href="/login" class="btn btn-primary btn-block">
                    Login
                </a>
            </div>
            <div class="col-span-3">
                <a href="/user/profile" class="btn btn-primary btn-block">
                    Profile
                </a>
            </div>
            <div class="col-span-3">
                <a href="/servers" class="btn btn-primary btn-block">
                    Servers
                </a>
            </div>
            <div class="col-span-3">
                <a href="/volumes" class="btn btn-primary btn-block">
                    Volumes
                </a>
            </div>
            <div class="col-span-3">
                <a href="/impressum" class="btn btn-primary btn-block">
                    Impressum
                </a>
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

const open = useLocalStorage('open-mobile', false, {});

onMounted(() => {
    open.value = false;
});
</script>