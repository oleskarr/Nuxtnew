<template>
   <Navbar />
Main
</template>





















<!-- <template>
  <main class="flex flex-col lg:flex-row bg-rose-300 min-h-screen">
Первая колонка (содержит статьи)
    <div 
      v-if="!showAllPosts" 
      class="vh-100 w-full lg:w-1/4 p-2 bg-rose-200 gap-10 z-10 relative">
      <div class="w-full overflow-y-auto h-screen">
        <div class="p-6">
          <article 
            v-for="(post, index) in visiblePosts" 
            :key="post.id" 
            class="group max-w-full sm:max-w-sm mx-auto bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1 mb-6">
            <img 
              :src="base_url + post.image.url" 
              :alt="post.image.alternativeText"
              class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
              {{ post.title }}
            </h3>
            <p class="text-gray-700 text-base mb-5 line-clamp-3">
              {{ post.description }}
            </p>
            <NuxtLink 
              :to="'/post/' + post.id" 
              class="inline-block px-4 py-2 text-white bg-indigo-600 rounded-full font-medium transition-colors hover:bg-indigo-500">
              Подробнее →
            </NuxtLink>
          </article>
        </div>
      </div>
    </div>

    
    <div v-if="!showAllPosts" class="hellopage w-full lg:w-3/4 flex flex-col justify-center items-center bg-white p-6 text-center">
      <div class="absolute top-0 w-full">
        <Head/>
      </div>
      <h2 class="text-3xl lg:text-5xl font-bold text-gray-800 mb-6 lg:mb-14 tracking-wide">
        Добро пожаловать в наш блог
      </h2>
      <h5 class="text-lg">Search for your subject</h5>
      <Navbar />
    </div>

    
    <div v-if="showAllPosts" class="w-full flex flex-wrap overflow-scroll justify-center items-center p-4 gap-6">
      <article 
        v-for="(post, index) in visiblePosts" 
        :key="post.id" 
        class="group w-full sm:max-w-sm mx-auto bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1 mb-6">
        <img 
          :src="base_url + post.image.url" 
          :alt="post.image.alternativeText"
          class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="p-6">
          <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
            {{ post.title }}
          </h3>
          <p class="text-gray-700 text-base mb-5 line-clamp-3">
            {{ post.description }}
          </p>
          <NuxtLink 
            :to="'/post/' + post.id" 
            class="inline-block px-4 py-2 text-white bg-indigo-600 rounded-full font-medium transition-colors hover:bg-indigo-500">
            Подробнее →
          </NuxtLink>
        </div>
      </article>
    </div>

   
    <div class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
      <button @click="togglePosts" :class="['w-12 h-12 text-white bg-indigo-600 rounded-full transition-transform duration-300', { 'rotate-180': isRotated }]">
        {{ showAllPosts ? '→' : '→' }}
      </button>
    </div>
  </main>
</template>

<script setup>
import Head from '~/components/Head.vue'
const api = await $fetch('https://d19d642231aa.vps.myjino.ru/api/posts?populate=*');
const posts = api.data;

// Видимый URL для картинок
const base_url = "https://d19d642231aa.vps.myjino.ru";

// Состояние для управления видимостью постов
import { ref, computed } from 'vue';
const showAllPosts = ref(false);
const isRotated = ref(false);

function togglePosts() {
  showAllPosts.value = !showAllPosts.value;
  isRotated.value = !isRotated.value;
}

// Показывать только первые 3 поста
const visiblePosts = computed(() => posts.slice(0, 3));
</script>

<style>
/* Адаптивные стили */
.overflow-y-auto::-webkit-scrollbar {
  display: none;
}

article {
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  padding: 1em;
  margin: 10px;
  text-align: center;
  border-radius: 10px;
  position: relative;
}

article::after, article::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: conic-gradient(from var(--angle), transparent 20%, #cdb4db, #ffc8dd, #ffafcc, #bde0fe, #a2d2ff);
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  padding: 3px;
  border-radius: 10px;
  animation: 3s spin linear infinite;
}

article::before {
  filter: blur(1.5rem);
  opacity: 0.5;
}

@keyframes spin {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 360deg;
  }
}

img {
  border-radius: 10px;
  object-fit: cover;
}
</style> -->


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