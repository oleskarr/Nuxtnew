<template>
  <div class="relative bg-gradient-to-r from-indigo-50 via-white to-cyan-50 min-h-screen py-12 px-6 lg:px-20">
    <!-- Декоративные круги на фоне -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute bg-indigo-100 rounded-full w-96 h-96 -top-10 -left-20 opacity-30 blur-3xl"></div>
      <div class="absolute bg-cyan-100 rounded-full w-80 h-80 -bottom-20 -right-10 opacity-30 blur-2xl"></div>
    </div>
    <h2 class="text-5xl font-bold text-gray-800 text-center mb-14 tracking-wide">
      Добро пожаловать в наш блог
    </h2>
    <main class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10 relative">
      <article 
        v-for="(post, index) in posts" 
        :key="post.id" 
        class="group max-w-sm mx-auto bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1">
        <img 
          :src="base_url + post.image.url" 
          :alt="post.image.alternativeText"
          class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
            {{ post.title }}
          </h3>
          <p class="text-gray-700 text-base mb-5 line-clamp-3">
            {{ post.description }}
          </p>
          <NuxtLink 
            :to="'/post/' + post.documentId" 
            class="inline-block px-4 py-2 text-white bg-indigo-600 rounded-full font-medium transition-colors hover:bg-indigo-500">
            Подробнее →
          </NuxtLink>
        </div>
      </article>
    </main>
  </div>
</template>


<!-- <template>

    <h2>Блог</h2>

<main>
<article v-for="(post, index) in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <img :src="base_url + post.image.url" :alt=post.image.alternativeText>
          <p>{{ post.description }}</p>
          <NuxtLink :to="'/post/' + post.documentId">Подробнее</NuxtLink> 
</article>
</main>
  
  </template> -->
    
  <style scoped> 
  article { 
    box-sizing: border-box; 
    background-color: rgb(0, 0, 0); 
    padding: 1em; 
    margin: 20px; 
    text-align: center; 
    border-radius: 10px; 
    position: relative; 
  } 
 
  article::after,
  article::before { 
    content: ''; 
    position: absolute; 
    height: 100%; 
    width: 100%; 
    background-image: conic-gradient( from 0deg, transparent 20%, #cdb4db, #ffc8dd,#ffafcc,#bde0fe,#a2d2ff); 
    top: 50%; 
    left: 50%; 
    translate: -50% -50%; 
    z-index: -2; 
    padding: 3px; 
    border-radius: 10px; 
    animation: 3s spin linear infinite; 
  } 
  article::before{ 
    filter: blur(1.5rem); 
    opacity:0.5; 
  } 
  @keyframes spin{ 
    0%{
     background-image:conic-gradient( from 0deg, transparent 20%, #cdb4db, #ffc8dd,#ffafcc,#bde0fe,#a2d2ff); 
    }
    100% {
     background-image:conic-gradient( from 360deg, transparent 20%, #cdb4db, #ffc8dd,#ffafcc,#bde0fe,#a2d2ff); 
    }
  } 
  article img { 
    border-radius: 10px; 
    width: 200px; 
    height: 200px; 
    object-fit: cover; 
  }  
</style>

  
<script setup>
const api = await $fetch('http://localhost:1337/api/posts?populate=*')
const posts = api.data

const base_url = "http://localhost:1337"
</script>