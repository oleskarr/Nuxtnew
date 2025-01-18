<template>
    <div class="flex flex-wrap justify-start gap-4 p-6">
      <article
        v-for="(post, index) in posts"
        :key="post.id"
        class="group bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1 mb-6"
        :style="randomPostStyle()"
      >
        <!-- Изображение поста -->
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
          <!-- Заголовок поста -->
          <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
            {{ post.title }}
          </h3>
          <!-- Описание поста -->
          <p class="text-gray-700 text-base mb-5 flex-1 overflow-hidden" style="text-overflow: ellipsis; white-space: nowrap;">
            {{ post.description }}
          </p>
          <!-- Кнопка "Подробнее" -->
          <NuxtLink
            :to="'/post/' + post.documentId"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Подробнее
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </NuxtLink>
        </div>
      </article>
    </div>
  </template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const posts = ref([]);  // Хранение данных о постах
  
  const fetchPosts = async () => {
    const base_url = "https://d19d642231aa.vps.myjino.ru";
    const api = await $fetch(`${base_url}/api/posts?populate=*`);
    posts.value = api.data;  // Сохранение полученных данных в переменную posts
  };
  
  onMounted(() => {
    fetchPosts();  // Загрузка данных при монтировании компонента
  });
  </script>
  
  
  
