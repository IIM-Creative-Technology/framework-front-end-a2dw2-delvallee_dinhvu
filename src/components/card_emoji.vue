<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->

<script setup>
defineProps(['title', 'link_img', 'sub_text'])
</script>

<template>
    <div class="w-10 h-10 rounded-full border border-solid  border-card_round flex justify-center content-center mr-2 mt-6 mb-3.5" >
        <img :src="link_img" class="w-8 h-8">
    </div>
</template> 
