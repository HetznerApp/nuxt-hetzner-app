<template>
    <header class="mx-auto max-w-6xl flex justify-between">
        <section class="logo">
            <span>Hetzner.app</span>
        </section>
    </header>
    <main class="mx-auto min-h-screen max-w-6xl">
        <div class="mx-3 my-3 lg:mx-0">
            <section role="alert" class="alert alert-warning">
            <p class="font-bold text-center block">
                Diese ist keine offizielle App von Hetzner sondern eine App von JMSE zur Steuerung von Hetzner
                via API.
            </p>
        </section>
        </div>
        <slot />
    </main>
    <footer class="mx-auto max-w-6xl">
        Footer
    </footer>
</template>