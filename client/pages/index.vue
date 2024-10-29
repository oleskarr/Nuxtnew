<template>
  
  <main class="flex bg-rose-300 min-h-screen">
    <!-- Первая колонка (содержит статьи) -->
    <div v-if="!showAllPosts" class="vh-100 w-[25%] mt-0 ml-0 p-2 bg-rose-200 gap-10 z-10 relative">
      <div class="w-max cont overflow-y-auto h-screen absolute">
        <div class="p-6">
        <article 
          v-for="(post, index) in visiblePosts" 
          :key="post.id" 
          class="group max-w-sm mx-auto bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1">
          <img 
            :src="base_url + post.image.url" 
            :alt="post.image.alternativeText"
            class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />
         
            <h3 class="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
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

    <!-- Вторая колонка (hellopage) -->
    <div v-if="!showAllPosts" class="hellopage w-[75%] flex flex-col justify-center items-center bg-white">
    <div class=" absolute top-0 w-full">
      <Head/>
    </div>
      <h2 class="text-5xl font-bold text-gray-800 text-center mb-14 tracking-wide">
        Добро пожаловать в наш блог
      </h2>
      <h5>Search for your subject</h5>
      <Navbar />
    </div>

    <!-- Блок с постами, который отображается вместо hellopage -->
    <div v-if="showAllPosts">
      <div class="w-max flex  h-screen absolute">
        <article 
          v-for="(post, index) in visiblePosts" 
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
              :to="'/post/' + post.id" 
              class="inline-block px-4 py-2 text-white bg-indigo-600 rounded-full font-medium transition-colors hover:bg-indigo-500">
              Подробнее →
            </NuxtLink>
          </div>
        </article>
      </div>
     
  
    </div>

    <!-- Кнопка "Посмотреть еще" -->
    <div class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 ">
        <button @click="togglePosts" :class="['w-[50px] h-[50px] text-white bg-indigo-600 rounded-full transition-transform duration-300', { 'rotate-180': isRotated }]">
        {{ showAllPosts ? '→ ' : '→' }}
      </button>
    </div>
  </main>
</template>

<script setup>
import Head from '~/components/Head.vue'
const api = await $fetch('http://localhost:1337/api/posts?populate=*');
const posts = api.data;

// Видимый URL для картинок
const base_url = "http://localhost:1337";

// Состояние для управления видимостью постов
import { ref } from 'vue';
const showAllPosts = ref(false);
const isRotated = ref(false);

function togglePosts() {
  showAllPosts.value = !showAllPosts.value;
  isRotated.value = !isRotated.value;
}
// Показывать только первые 3 поста
const visiblePosts = computed(() => posts.slice(0, 3));
</script>

<style >
/* Стили для скрытия скроллбара */
.overflow-y-auto::-webkit-scrollbar {
  display: none; 
}

/* Стили для анимации вокруг постов */
@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

article {
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
 
  padding: 1em;
  margin: 20px;
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

article img {
  border-radius: 10px;
  object-fit: cover;
}
</style>

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