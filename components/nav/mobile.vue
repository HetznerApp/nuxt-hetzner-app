<template>
    <section class="mobile sm:hidden">
        <div v-if="open" class="times">
            <button type="button" @click="open = !open">
                <FontAwesomeIcon :icon="faTimes" class="w-5" color="white" />
            </button>
        </div>
        <div v-else class="bars">
            <button type="button" @click="open = !open">
                <FontAwesomeIcon :icon="faBars" class="w-5" color="white" />
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useLocalStorage } from '@vueuse/core';
const open = useLocalStorage('open-mobile', false, {});
</script>