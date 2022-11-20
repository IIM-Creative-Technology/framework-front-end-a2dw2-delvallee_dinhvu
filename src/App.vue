<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Card from "./components/Card.vue";
import Card_emoji from "./components/card_emoji.vue";
import image_card from "./components/image_card.vue";
import Nbr_page from "./components/nbr_page.vue";
</script>

<template>

  <section class=" mx-20">
    <div class="flex justify-between mb-thirty_space">
      <h1 class="text-lg font-bold uppercase">Les plus populaires &#128293;</h1>
      <div class="flex items-center">
        <img src="/img/Vector_2.png">
        <img src="/img/Vector_1.png" class="pl-twenty_space w-auto">
      </div>
    </div>
    <div class="flex flex-wrap justify-between">
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card mb-5" >
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
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card mb-5">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Vente" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_2.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card mb-5">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="RH, QVT & diversité" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_3.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card mb-5">
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

    <h1 class="text-lg font-bold pt-76 uppercase mb-10">Toutes les formations &#128640;</h1>
    
    <div class="flex flex-wrap justify-between">
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5" >
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
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Vente" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_2.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="RH, QVT & diversité" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_3.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Thématique 1" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_4.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5" >
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
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Vente" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_2.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="RH, QVT & diversité" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_3.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Thématique 1" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_4.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5" >
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
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Vente" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_2.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5">
        <div class="ml-4">
          <Card title="Accueillir un.e collègue en situation de handicap" sub_text="RH, QVT & diversité" link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          <div class="flex flex-row">
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
            <Card_emoji link_img="/img/7b34556817e126415d07d1b23a06c666.png" />
          </div>
        </div>
        <image_card link_img="/img/Rectangle_3.png" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height rounded-card my-5">
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


</template>

<style scoped>
</style>
