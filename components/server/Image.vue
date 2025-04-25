<template>
    <sectin class="grid grid-cols-6 gap-3 my-6">
        <div class="col-span-6 md:col-span-2">
            <ul class="list">
                <li class="bg-gray-400 rounded-lg px-3 py-3 text-center">
                    {{ props.image?.name }}
                </li>
            </ul>
        </div>
        <div class="col-span-6 md:col-span-2">
            <ul class="list">
                <li class="bg-gray-400 rounded-lg px-3 py-3 text-center">
                    {{ props.image?.architecture }}
                </li>
            </ul>
        </div>
        <div class="col-span-6 md:col-span-2">
            <ul class="list">
                <li class="bg-gray-400 rounded-lg px-3 py-3 text-center">
                    {{ props.image?.type }}
                </li>
            </ul>
        </div>
    </sectin>
</template>

<script setup lang="ts">
const props = defineProps({
    image: { Type: Object, required: true }
});
</script>