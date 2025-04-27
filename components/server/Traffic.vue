<template>
  <div class="divider divider-primary">
    Traffic
  </div>
  <section class="grid grid-cols-6 gap-3 my-3">
    <div class="col-span-6 md:col-span-2">
      <section class="card bg-gray-400">
        <div class="card-body text-center">
          <p class="text-sm">
            {{ server.outgoing_traffic }}
          </p>
        </div>
      </section>
    </div>
    <div class="col-span-6 md:col-span-2">
      <section class="card bg-gray-400">
        <div class="card-body text-center">
          <p class="text-sm">
            {{ server.ingoing_traffic }}
          </p>
        </div>
      </section>
    </div>
    <div class="col-span-6 md:col-span-2">
      <section class="card bg-gray-400">
        <div class="card-body text-center">
          <p class="text-sm">
            {{ server.included_traffic }}
          </p>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps({
  server: { type: Object, required: true }
})

</script>