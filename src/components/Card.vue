<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->

<script setup>
defineProps(['title', 'link_img', 'sub_text'])
</script>

<template>
  <div class="p-4">
    <p class="text-sm">{{ sub_text }}</p>
    <p class="text-base">{{ title }}</p>
    <div class="w-10 h-10 rounded-full border border-solid  border-card_round flex justify-center content-center mt-6" >
      <img :src="link_img" class="w-8 h-8">
    </div>
  </div>
</template> 
