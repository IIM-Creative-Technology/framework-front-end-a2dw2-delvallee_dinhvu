<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->

<script setup>
defineProps(['link_img'])
</script>

<template>
    <img :src="link_img" class="h-card_img_height object-cover">
</template> 
