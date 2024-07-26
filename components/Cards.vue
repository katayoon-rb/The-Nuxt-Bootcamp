<script setup lang="ts">
  const cards = [
    {
      img: "https://github.com/katayoon-rb/The-Nuxt-Bootcamp/blob/main/assets/images/BabyNameGenerator.png",
      title: "Baby Name Generator",
      link: "https://katybabynamenuxtb.vercel.app/",
    },
    {
      img: "https://github.com/katayoon-rb/The-Nuxt-Bootcamp/blob/main/assets/images/Restaurantly.png",
      title: "Restaurantly",
      link: "https://katytoprestaurantsnuxtb.vercel.app/restaurants",
    },
    {
      img: "https://github.com/katayoon-rb/The-Nuxt-Bootcamp/blob/main/assets/images/Artikle.png",
      title: "Artikle",
      link: "https://katydarkmodenuxtb.vercel.app/",
    },
    {
      img: "https://github.com/katayoon-rb/The-Nuxt-Bootcamp/blob/main/assets/images/WeatherApp.png",
      title: "Weather App",
      link: "https://katyweatherappnuxtb.vercel.app/",
    },
    {
      img: "https://github.com/katayoon-rb/The-Nuxt-Bootcamp/blob/main/assets/images/TodoApp.png",
      title: "Todo App",
      link: "https://katytodoappnuxtb.vercel.app/",
    },
    {
      img: "https://github.com/katayoon-rb/The-Nuxt-Bootcamp/blob/main/assets/images/NotesApp.png",
      title: "Notes App",
      link: "https://katynotesappnuxtb.vercel.app/",
    },
  ];
</script>


<template>
  <div class="container">
    <Card v-for="(card, index) in cards" :key="index" :card="card" />
  </div>
</template>


<style scoped>
  .container {
    width: 50%;
    margin: 0 auto;
    padding: 25px 0 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>