<template>
  <div class="flex h-screen relative">
    <!-- Левая панель -->
    <div
      :style="{
        width: `${panelWidth}%`,
        transition: 'width 0.5s ease-in-out, background-color 0.5s ease-in-out'
      }"
      class="p-2 z-10 relative overflow-y-auto bg-rose-200"
    >
      <div class="flex flex-wrap justify-start gap-4 p-6">
        <article 
          v-for="(post, index) in visiblePosts" 
          :key="post.id" 
          class="group bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1 mb-6"
          :style="randomPostStyle()"
        >
          <img 
            :src="base_url + post.image.url" 
            :alt="post.image.alternativeText"
            class="transition-transform duration-500 group-hover:scale-110"
            :style="{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }"
          />
          <div class="p-4 flex flex-col justify-between" style="height: 100%;">
            <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
              {{ post.title }}
            </h3>
            <p class="text-gray-700 text-base mb-5 flex-1 overflow-hidden" style="text-overflow: ellipsis; white-space: nowrap;">
              {{ post.description }}
            </p>
            <!-- Кнопка "Подробнее" всегда видна -->
            <NuxtLink :to="'/post/' + post.documentId" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Подробнее
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </NuxtLink>
          </div>
        </article>
      </div>
    </div>

    
    
  </div>
</template>

<script setup>
// import { ref, computed } from 'vue'

// // Данные для постов
// const base_url = "https://d19d642231aa.vps.myjino.ru"
// const api = await $fetch('https://d19d642231aa.vps.myjino.ru/api/posts?populate=*')
// const posts = api.data

// // Управление шириной панели
// const panelWidth = ref(30);

// // Функция для переключения ширины панели
// const togglePanelWidth = () => {
//   panelWidth.value = panelWidth.value === 30 ? 80 : 30
// }

// // Показывать только первые 3 поста
// const visiblePosts = computed(() => posts.slice(0, 3));

// // Функция для случайных размеров постов
// function randomPostStyle() {
//   const randomHeight = Math.floor(Math.random() * (350 - 250 + 1)) + 250; // высота от 250px до 350px
//   const randomWidth = Math.floor(Math.random() * (300 - 250 + 1)) + 250; // ширина от 250px до 300px
//   return {
//     height: `${randomHeight}px`,  // Используем кастомные CSS-переменные
//     width: `${randomWidth}px`,
//   };
// }
</script>

<style scoped>
/* Высота экрана для обеих панелей */
.p-2 {
  height: 100%;
}

/* Скрыть полосу прокрутки */
.overflow-y-auto::-webkit-scrollbar {
  display: none;
}

/* Для IE и Edge */
.overflow-y-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Стили для кнопки */
button {
  transition: none; /* Убираем плавную анимацию для кнопки */
  cursor: pointer;
}

button svg {
  transition: transform 0.3s ease;
}

article {
  position: relative;
  min-width: 250px; /* Минимальная ширина поста */
  min-height: 250px; /* Минимальная высота поста */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Размещение элементов внутри поста */
}

img {
  border-radius: 10px;
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Для обеспечения видимости постов */
.flex-wrap {
  display: flex;
  flex-wrap: wrap; /* Выстраиваем посты в строку */
  gap: 16px;
}

article h3, article p {
  margin: 0 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

article p {
  max-height: 80px;
}

article .p-4 {
  flex-grow: 1; /* Контейнер для текста растягивается, чтобы описание не выходило за пределы */
  overflow: hidden;
}

/* Стили для кнопки "Подробнее" */

</style>




















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