<script setup lang="ts">
  const props = defineProps<{
    card: {
      img: string;
      title: string;
      link: string;
    };
  }>();
</script>


<template>
  <a :href="card.link" class="card">
    <img :src="card.img" :alt="card.title" />
    <h3>{{ card.title }}</h3> 
  </a>
</template>


<style scoped>
  .card {
    box-shadow: 1px 1px 5px black;
    background: white;
    width: 30%;
    margin-bottom: 30px;
    border-radius: 5px;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 200px;
  }
  h3 {
    padding: 10px;
  }

  .dark .card {
    color: black;
  }
</style>
