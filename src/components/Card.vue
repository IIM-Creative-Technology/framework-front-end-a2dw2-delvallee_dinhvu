<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->

<script setup>
defineProps(['title', 'sub_text'])
</script>

<template>
  <div class="pt-4 pr-4">
    <p class="text-sm">{{ sub_text }}</p>
    <p class="text-base font-bold">{{ title }}</p>
  </div>
</template> 
