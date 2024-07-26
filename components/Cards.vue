<script setup lang="ts">
  const cards = [
    {
      img: "/images/BabyNameGenerator.png",
      title: "Baby Name Generator",
      link: "https://katybabynamenuxtb.vercel.app/",
    },
    {
      img: "/images/Restaurantly.png",
      title: "Restaurantly",
      link: "https://katytoprestaurantsnuxtb.vercel.app/restaurants",
    },
    {
      img: "/images/Artikle.png",
      title: "Artikle",
      link: "https://katydarkmodenuxtb.vercel.app/",
    },
    {
      img: "/images/WeatherApp.png",
      title: "Weather App",
      link: "https://katyweatherappnuxtb.vercel.app/",
    },
    {
      img: "/images/TodoApp.png",
      title: "Todo App",
      link: "https://katytodoappnuxtb.vercel.app/",
    },
    {
      img: "/images/NotesApp.png",
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
