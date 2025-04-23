<template>
    <section class="tablet hidden sm:flex lg:hidden">
        <div v-if="open" class="times">
            <button type="button" @click="open = !open">
                <FontAwesomeIcon :icon="faTimes" class="w-5" color="white" />
            </button>
        </div>
        <div v-else class="bars space-x-4">
            <button type="button">
                <FontAwesomeIcon :icon="faPlusCircle" class="w-5" color="white" />
            </button>
            <button type="button">
                <FontAwesomeIcon :icon="faServer" class="w-5" color="white" />
            </button>
            <button type="button">
                <FontAwesomeIcon :icon="faHardDrive" class="w-5" color="white" />
            </button>
            <button type="button" @click="open = !open">
                <FontAwesomeIcon :icon="faBars" class="w-5" color="white" />
            </button>
        </div>
    </section>
    <section class="tablet hidden sm:flex lg:hidden">
        <div class="drawer">
            <input id="my-drawer" type="checkbox" v-model="open" class="drawer-toggle" />
            <div class="drawer-content">
                <!-- Page content here -->
            </div>
            <div class="drawer-side">
                <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                <section class="menu text-base-content min-h-full w-96 p-4 bg-base-200">
                    <img src="https://cdn.jmse.cloud/logo-jmse.png" class="bg-white px-3 py-3 rounded-lg" alt="">
                    <section class="grid grid-cols-6 gap-3 my-3">
                        <div class="col-span-3">
                            <a href="/" class="btn btn-primary btn-block">Startseite</a>
                        </div>
                        <div class="col-span-3">
                            <a href="/login" class="btn btn-primary btn-block">Login</a>
                        </div>
                        <div class="col-span-3">
                            <a href="/resgister" class="btn btn-primary btn-block">Register</a>
                        </div>
                        <div class="col-span-3">
                            <a href="/user/profile" class="btn btn-primary btn-block">Profile</a>
                        </div>
                        <div class="col-span-3">
                            <a href="/servers" class="btn btn-primary btn-block">Servers</a>
                        </div>
                        <div class="col-span-3">
                            <a href="/volumes" class="btn btn-primary btn-block">Volumes</a>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faHardDrive, faPlusCircle, faServer, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useLocalStorage } from '@vueuse/core';
const open = useLocalStorage('open-mobile', false, {});
</script>