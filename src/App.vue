<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'

import Button from "./components/Button.vue";
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import Card_emoji from "./components/card_emoji.vue";
import image_card from "./components/image_card.vue";
import Nbr_page from "./components/nbr_page.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
    <Header></Header>


  <section class=" mx-20 mt-margin_cards_nav max-sp:mx-4 max-sp:mt-margin_cards_nav_responsive">
    <div class="flex justify-between mb-thirty_space">
      <h1 class="text-lg font-bold uppercase">Les plus populaires &#128293;</h1>
      <div class="flex items-center">
        <img src="/img/Vector_2.png">
        <img src="/img/Vector_1.png" class="pl-twenty_space w-auto">
      </div>
    </div>
    <div class="flex flex-wrap justify-between max-sp:flex-nowrap max-sp:flex-col max-sp:items-center ">
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card mb-5 max-sp:w-auto" >
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Management & Leadership" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_1.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card mb-5  max-sp:hidden">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Vente" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_2.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card mb-5 max-sp:hidden">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="RH, QVT & diversité" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_3.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card mb-5 max-sp:hidden">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Thématique 1" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_4.png" />
      </div>
    </div>

    <h1 class="text-lg font-bold mt-76 uppercase mb-10 max-sp:mt-margin_title max-sp:mb-6">Toutes les formations &#128640;</h1>
    
    <div class="flex flex-wrap justify-between max-sp:flex-nowrap max-sp:flex-col max-sp:items-center">
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5 max-sp:w-auto max-sp:my-4" >
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Management & Leadership" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_1.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5 max-sp:w-auto max-sp:my-4">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Vente" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_2.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5 max-sp:w-auto max-sp:my-4">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="RH, QVT & diversité" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_3.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5 max-sp:w-auto max-sp:my-4">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Thématique 1" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_4.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5 max-sp:w-auto max-sp:my-4" >
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Management & Leadership" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_1.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5 max-sp:w-auto max-sp:my-4">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Vente" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_2.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5 max-sp:w-auto max-sp:my-4">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="RH, QVT & diversité" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_3.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5 max-sp:w-auto max-sp:my-4">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Thématique 1" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_4.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5 max-sp:hidden" >
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Management & Leadership" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_1.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5 max-sp:hidden">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Vente" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_2.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5 max-sp:hidden">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="RH, QVT & diversité" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_3.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5 max-sp:hidden">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Thématique 1" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_4.png" />
      </div>
    </div>
    <Nbr_page number="8"/>
  </section>

  <div class="flex justify-center mt-[94px] mb-12">
        <section class="bg-gris-violet w-[844px] text-center py-[42px] rounded-[20px] max-sp:w-[343px]">
            <h2 class="font-bold text-[30px] text-gradient max-sp:text-[24px] min-sp:text-black">C'est votre dernier mot ?</h2>
            <p class="mx-[218px] mt-[15px] mb-[26px] max-sp:m-0 max-sp:mt-[18px] max-sp:mb-6">Si vous n’avez pas trouvé ce que vous cherchez, dites-le nous.</p>
            <div class="flex justify-center">
                <div class="flex gap-[23.5px] w-fit max-sp:block">
                    <Button class="bg-Violet text-blanc max-sp:w-[299px] max-sp:mb-4" text="Je prends contact"></Button>
                    <Button class="bg-gris-violet border-solid border-[3px] border-gradient max-sp:w-[299px]" text="Télécharger le catalogue"></Button>
                </div>
            </div>
        </section>
    </div>

    <Footer text="Skillsday est un organisme nouvelle génération qui a pour mission de moderniser et digitaliser la formation en entreprise pour former, vraiment !"></Footer>

</template>

<style scoped>
</style>
