<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Button from "./components/Button.vue";
import Header from "./components/Header.vue";
</script>

<template>
    <Header></Header>

    <div class="flex justify-center mt-[94px] mb-12">
        <section class="bg-gris-violet w-[844px] text-center py-[42px] rounded-[20px] max-sp:w-[343px]">
            <h2 class="font-bold text-[30px] text-gradient max-sp:text-[24px]">C'est votre dernier mot ?</h2>
            <p class="mx-[218px] mt-[15px] mb-[26px] max-sp:m-0 max-sp:mt-[18px] max-sp:mb-6">Si vous n’avez pas trouvé ce que vous cherchez, dites-le nous.</p>
            <div class="flex justify-center">
                <div class="flex gap-[23.5px] w-fit max-sp:block">
                    <Button class="bg-Violet text-blanc max-sp:w-[299px] max-sp:mb-4" text="Je prends contact"></Button>
                    <Button class="bg-gris-violet border-solid border-[3px] border-gradient max-sp:w-[299px]" text="Télécharger le catalogue"></Button>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
</style>
