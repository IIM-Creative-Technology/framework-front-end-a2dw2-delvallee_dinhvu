<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->

<script setup>
defineProps(['number'])
</script>

<template>
    <div class="flex items-center justify-end mt-9">
        <div class="w-9 h-9 rounded-full border border-solid  border-card_round flex justify-center content-center" >
            <p class="text-2xl text-card_round">1</p>
        </div>
        <div class="ml-1">
            <p class="text-base text-gray-500">2</p>
        </div>
        <div class="ml-4">
            <p class="text-base text-gray-500">3</p>
        </div>
        <div class="ml-4">
            <p class="text-base text-gray-500">4</p>
        </div>
        <div class="ml-4">
            <p class="text-base text-gray-500">...</p>
        </div>
        <div class="ml-4">
            <p class="text-base text-gray-500">{{ number }}</p>
        </div>
    </div>
</template> 
