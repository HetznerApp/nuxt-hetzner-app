<template>
    <header class="mx-auto max-w-6xl px-3 py-3 flex justify-between bg-[#FF0000]">
        <section class="logo font-bold">
            <span>Hetzner.app</span>
        </section>
        <nav>
            <NavMobile />
            <NavTablet />
            <NavDesktop />
        </nav>
    </header>
    <NavContent />
    <main class="mx-auto min-h-screen max-w-6xl">
        <div class="mx-3 my-3 lg:mx-0">
            <section role="alert" class="alert alert-warning block text-center font-bold">
                Diese ist keine offizielle App von Hetzner sondern eine App von
                <a href="https://www.jmse.cloud" class="text-red-600" target="_blank">JMSE</a> zur Steuerung von Hetzner
                via API.
            </section>
        </div>
        <slot />
    </main>
    <footer class="mx-auto max-w-6xl px-3 py-3 bg-primary">
        Footer
    </footer>
</template>
