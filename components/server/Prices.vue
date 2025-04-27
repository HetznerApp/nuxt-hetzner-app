<template>
  <div class="divider divider-primary">
    Preise
  </div>
  <section v-if="props.server.server_type" class="grid grid-cols-6 gap-3 my-3">
    <div v-for="price in props.server.server_type.prices" class="col-span-6 md:col-span-2">
      <section class="card bg-gray-400">
        <div class="card-body text-center">
          <p class="text-sm" v-if="price.price_monthly.net">
            {{ price.location }}
            {{ parseFloat(price.price_monthly.net).toFixed(2) }}
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