<template>
  <section class="page mx-3 lg:mx-auto bg-white text-black max-w-6xl px-3 py-3">
    <h3 class="font-bold text-lg flex justify-between">
      <span>Herzlichen Glückwunsch, du das den Security Award gewonnen.</span>
    </h3>
    <p class="text-sm">Das bedeutet du bist skeptisch ob du uns trauen kannst ? Da gibt es 2 Möglichkeiten.</p>
    <br>
    <h3 class="font-bold text-lg flex justify-between">
      <span>Im Code nachschauen</span>
    </h3>
    <p class="text-sm">
      Hier ist deine Möglichkeit selber im Code nachzuschauen.
      <a href="https://github.com/HetznerApp/nuxt-hetzner-app" target="_blank" class="text-blue-600 font-bold"
        rel="noopener noreferrer">Github - Code</a> Du kannst zu Beispiel nachschauen wie wir mit dem Token umgehen.
    </p>
    <br>
    <h3 class="font-bold text-lg flex justify-between">
      <span>Wir erklären dir was passiert.</span>
    </h3>
    <p class="text-sm">
      <span class="font-bold">Token</span> - wir speichern diesen lokal im Locale Storage und senden ihn ne zu unserem
      Server.<br>
      <span class="font-bold">Token</span> - der Token wird aufgrund der https Regeln die für unsere TLD exestiert immer
      verschlüsselt an Hetzner übertragen.
    </p><br>
    <section class="actions">
      <div class="text-center block">Weitere Frage und Anregungen gerne per Mail an</div>
      <div class="text-center block">
        <a href="mailto:support@jonathan-martz.de" class="text-blue-600">
          support@jonathan-martz.de
        </a>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>

</script>
