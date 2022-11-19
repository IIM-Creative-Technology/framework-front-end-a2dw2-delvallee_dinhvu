<script setup>
defineProps(['text'])
</script>

<template>

    <header class="bg-[url('./img/bg-image.png')] bg-no-repeat bg-cover relative pt-[39.5px] max-sp:pt-[58px] max-sp:px-2 max-sp:bg-[url('./img/bg-image-mobile.png')]">
        <nav class="flex ml-[104px] mr-[74.5px] justify-between max-sp:m-0">
            <img src="/img/logo.svg" alt="logo" class="w-[150px] h-auto mr-[81px]">
            <ul class="text-white flex items-center text-[16px] gap-x-6 max-sp:hidden">
                <li>Offres</li>
                <li class="font-bold">Formations</li>
                <li>Ressources</li>
                <li class="">A propos</li>
            </ul>
            <div class="flex items-center gap-x-6 ml-[132.5px] max-sp:hidden">
                <button class="bg-grisTransparent text-blanc py-3 px-4 bg-blanc text-[16px] rounded-[30px] font-semibold">06 74 49 03 21</button>
                <button class="text-Violet py-3 px-4 bg-blanc text-[16px] rounded-[30px] font-semibold">Je prends contact</button>
            </div>

            <img class="hidden max-sp:block cursor-pointer" src="/img/burger.svg" alt="logo-menu-burger">
        </nav>

        <div class="pb-[130px] pt-[78.5px] mx-[191px] max-sp:mx-4 max-sp:mx-2 max-sp:pt-[58px] max-sp:pb-[122px]">
            <h1 class="text-6xl text-blanc text-center font-bold max-sp:text-[28px]">Découvrez nos formations sur étagère !</h1>
            <p class="text-blanc text-center mt-6 mx-[107px] max-sp:mx-0 max-sp:mt-4">Notre catalogue de formations soft skills est le meilleur allié de vos managers et collaborateurs. Management, vente, ressources humaines, efficacité professionnelle... Composez votre parcours de formation et mixez les modalités pédagogiques pour développer leurs compétences.</p>
        </div>

        <div class="flex justify-center">
            <div class="bg-blanc shadow-searchbar absolute rounded-[30px] py-6 px-8 top-[409px] flex gap-[30px] shadow-xl bg-blanc max-sp:top-[442px] max-sp:w-[343px] max-sp:block max-sp:py-[31px] max-sp:px-[22px]">
                <input class="bg-gris-violet w-[842px] h-[56px] pl-6 rounded-[30px] placeholder-black max-sp:w-[299px] max-sp:mb-4" type="text" placeholder="Quelle formation recherchez-vous ?">
                <div class="bg-gris-violet rounded-[30px] flex w-fit py-[17px] pl-[60px] pr-[36px] max-sp:pl-6 max-sp:pr-[17px]">
                    <a class="mr-[32px] max-sp:mr-[199px]" href="">Filtrer</a>
                    <img src="/img/arrow.svg" alt="arrow">
                </div>
                <!-- <select class="bg-gris-violet rounded-[30px] w-fit py-[17px] pl-[60px] pr-[36px]" name="filtrer" id="filtrer">
                    <option value="filtrer">Filtrer</option>
                </select> -->
            </div>    
        </div>
    </header>

</template>