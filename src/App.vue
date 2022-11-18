<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Card from "./components/Card.vue";
import image_card from "./components/image_card.vue";
</script>

<template>

  <section class=" mx-20">
    <h1>Les plus populaires &#128293;</h1>
    <div class="flex flex-wrap justify-between">
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height " >
        <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Management & Leadership" link_img="/public/img/7b34556817e126415d07d1b23a06c666.png"/>
        <image_card link_img="https://s3-alpha-sig.figma.com/img/d6a0/5c64/f37dd728ee2f32d1298b4c9ba93b6863?Expires=1669593600&Signature=XtvfhjqgwRilSuiBwBetjys2pvqcGe8FAYiKxhQbHUC7j7H~PE0sqckqPJ5nAsVy5ZAaF4Nql5eQzh9KUUfEzGvHDsym0XPpAXiShHz7E6EZHgsAZr2~J22TrYfTS0R48-Ue~dKzRPUOr0-jT2-gSDbc5OwdRkTch8XQLsu~ziQSaC9VOIaMDB1seG14FPIcBI50166Fek2NaUtTlLqHxFxVcjQhoLCBqbCQ0t~ZiqcbQL5~nX1c5g3lYQMMP1RvtxH~LBT1ZamCGD76mWdw6LJunfl3yzorB5vtAiwgvhbXgySQV2sDdMtBh7B97TqHmdM6Gp8fMuX7DbqYdcicjQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height ">
        <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Vente" link_img="/public/img/7b34556817e126415d07d1b23a06c666.png"/>
        <image_card link_img="https://s3-alpha-sig.figma.com/img/7c71/8093/1b9edb664a76b0449037bf0a87813feb?Expires=1669593600&Signature=bScs2WFl025i4nFFgZsq9qR1Ofu1onrl4~roIPOo2h4nUpRc22bLnr26ZLHaj5rLDrVp9cYDUW8E5QE4qUauo4Zi~4BkGib-JKs8sBMCzh9uPdRaBW5b7DzdZdFDDDjFbRkgg-BpOUEulKAFh3oq5no20iTwryjt4KonzfMWdbNe7Hev88FZYqr1q4Sgd5Mb-HqNgS89yct7m7G1Ng4jw-HTPZrPX04u1RmCQx1362wpeXeXKCcOq5xPehu1h9~QEV42X-ZtE1k8506ZE2tiAOE4l5kriow9uF6L8JB-KWWA7KhFI3S0v~1p3XLQsihJLF2e8buTy01NuKgWS1gf6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height">
        <Card title="Accueillir un.e collègue en situation de handicap" sub_text="RH, QVT & diversité" link_img="/public/img/7b34556817e126415d07d1b23a06c666.png"/>
        <image_card link_img="https://s3-alpha-sig.figma.com/img/2dea/ab12/ee672aff8c8280c7518a2ea1e3922c77?Expires=1669593600&Signature=QFoF5OF7VaCgxkLk4Xixres8mvvECePifLa8i6IC1DcIpX-~h2OotGjztNptMSzYX7s10WuPx6hUKPXTGQoIFzs2PPWWhXnj-EbvJW7yxlnTudnmvIYg9CVl9P5k7fQBv~UHksBjOUbejyKQiAmJBUx~CQoI9Hxdjh5W7QZ7fgWZKaRSJYs2HqKKi-T~EOor3hTjNEao4FWgM9piqzaE73modioxStpqFt3uIwZCTBQuDiOcBf75nHku1RwaqMLW~83Go7N~8vnPtWD5dLq5NKEZc9S1rCXvB2VsQc4f7hS-DHG7nau3B9eLysPZRj3yk8COf-4UcHym7W2eMGFaQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      </div>
      <div class=" flex flex-col-reverse shadow-lg shadow-slate-500/20 w-card_width h-card_height">
        <Card title="Accueillir un.e collègue en situation de handicap" sub_text="Thématique 1" link_img="/public/img/7b34556817e126415d07d1b23a06c666.png"/>
        <image_card link_img="https://s3-alpha-sig.figma.com/img/82da/cec6/a1493e42c0df7ff2887229b161b5971b?Expires=1669593600&Signature=giFfP37TjUqyoQg2a5z0Vp5FOMpWrH0z7R1oQUOzxM8K16DCj5tlvcGOX3A-c2mCW-oI~uZz2I65-kSgFVOYxU8lNPXo~SqkuEwO9ZpHmhDvDhJYLgJVDVDP5qglmZxxnfI8wfx6AWWhWyjKB1LoHfhTm8OKc4hBnsOSmz7sQvg1wXw5GPuhq~oG8KTIK6gz7Hb2pSevf8lqKOf0Fwz1dpewxvqoCxXM8DHY6ifss143EBlq8Efx4MgQhtRjIlO3PpgBL8E0V37-SUK2wtQ2ddntXByPpE9SGYvvr5o61E1nZfXJ5xLxlwFQ-K1ADNg1gjmbZDdw1CpmXxnPyXTBaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      </div>
    </div>
  </section>


</template>

<style scoped>
</style>
