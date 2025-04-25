<template>
  <div>
    <section class="grid grid-cols-6 gap-3">
      <div class="col-span-6 md:col-span-3">
        <ul v-if="props.server.public_net" class="list bg-gray-400 rounded-box shadow-md">
          <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Your Adress using IPv4</li>
          <li class="list-row">
            <div>
              <img class="size-10 rounded-box" src="https://place-hold.it/128x128?text=IPv4&fontsize=30" />
            </div>
            <div>
              <div>IPv4</div>
              <div class="text-xs font-semibold opacity-60">{{ props.server.public_net['ipv4'].ip }}</div>
            </div>
            <section v-if="props.server.public_net['ipv4'].dns_ptr.length > 0" class="links">
              <a :href="'https://' + props.server.public_net['ipv4'].dns_ptr" target="_blank" class="btn btn-square btn-ghost">
                {{ address }}
                <FontAwesomeIcon :icon="faLink" color="white" class="w-5" />
              </a>
            </section>
          </li>
        </ul>
      </div>
      <div class="col-span-6 md:col-span-3">
        <ul v-if="props.server.public_net" class="list bg-gray-400 rounded-box shadow-md">
          <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Your Adress using IPv6</li>
          <li class="list-row">
            <div>
              <img class="size-10 rounded-box" src="https://place-hold.it/128x128?text=IPv6&fontsize=30" />
            </div>
            <div>
              <div>IPv6</div>
              <div class="text-xs font-semibold opacity-60">{{ props.server.public_net['ipv6'].ip }}</div>
            </div>
            <section v-if="props.server.public_net['ipv6'].dns_ptr.length > 0" class="links">
              <a :href="'https://' + props.server.public_net['ipv6'].dns_ptr" target="_blank" class="btn btn-square btn-ghost">
                {{ address }}
                <FontAwesomeIcon :icon="faLink" color="white" class="w-5" />
              </a>
            </section>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  server: { Type: Object, required: true }
});
</script>