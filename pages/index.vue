<template>
    <section class="page mx-3 lg:mx-auto bg-white text-black max-w-6xl px-3 py-3">
        <div class="divider divider-primary">Willkommen auf der Startseite</div>
        <img src="https://place-hold.it/640x360?text=Hero&fontsize=30" alt="">

        <section class="grid grid-cols-6 my-3 gap-y-3">
            <div class="col-span-6">
                <a href="/über-uns" class="btn btn-neutral btn-block text-center">
                    -> skeptische Kunden <- 
                </a>
            </div>
            <div class="col-span-6 md:col-span-3">
                <a href="/login" class="btn btn-secondary btn-block text-center">
                    Hetzner Kunden mit Token ->
                </a>
            </div>
            <div class="col-span-6 md:col-span-3">
                <a href="/servers" class="btn btn-primary btn-block text-center">
                    <- Kunden mit eingebene Token
                </a>
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
</script>