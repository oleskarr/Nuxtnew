<template>
  <div class="h-full flex flex-col gap-6 items-center justify-center animate-pulse">
    <h1 class="font-bold text-6xl text-fuchsia-500 hover:text-fuchsia-800 transition duration-300">Добро пожаловать!</h1>
    <h3 class="text-gray-500 hover:text-gray-700 transition duration-300">В мой проект</h3>

    <input type="text" id="search-navbar" v-model="search.searchQuery" @keyup.enter="goToSearch"
          @focus="goToSearch"
          class="block w-[50%] h-[4%] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition duration-300 hover:bg-gray-200"
          placeholder="Search...">
        
    <button data-collapse-toggle="navbar-search" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition duration-300 hover:scale-110"
        aria-controls="navbar-search" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
    </button>

    <ul class="flex p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NuxtLink
          to="/portfolio"
          class="block p-2 border text-2xl bg-gray-200 rounded-full hover:bg-gray-300 md:hover:bg-transparent md:hover:text-blue-700 border-gray-700 transition duration-300 hover:scale-105"
          :class="{ 'text-blue-700': $route.path === '/portfolio' }">
          Портфолио
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/contacts"
          class="block p-2 border text-2xl rounded-full bg-gray-200 hover:bg-gray-300 md:hover:bg-transparent md:hover:text-blue-700 border-gray-700 transition duration-300 hover:scale-105"
          :class="{ 'text-blue-700': $route.path === '/contacts' }">
          Контакты
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse {
  animation: pulse 1.5s infinite;
}
</style>
<script setup>
const search = useSearchStore()

const inputSearch = ref(search.searchQuery)

const router = useRouter()
watch(() => search.searchQuery, (newQuery) => {
  if (newQuery) router.push('/search')
});

const goToSearch = () => router.push('/search')
const route = useRoute()
// Функция для проверки активной ссылки по первой части пути
const isActive = (path) => route.path.split('/')[1] === path
</script>





















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