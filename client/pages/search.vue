<template>
    <Navbar />
    <h1 class="text-2xl font-medium mb-6">Поиск</h1>
    <main>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Посты -->
        <article
          v-for="post in posts"
          :key="post.id"
          class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col"
          :class="randomSize()"
        >
          <!-- Картинка как ссылка -->
          <NuxtLink
            class="block rounded-t-lg overflow-hidden"
            :to="'/post/' + post.documentId"
          >
            <img
              class="w-full h-48 object-cover"
              :src="base_url + post.image.url"
              :alt="post.image.alternativeText"
            />
          </NuxtLink>
          <div class="p-5 flex flex-col justify-between flex-grow">
            <div>
              <!-- Заголовок -->
              <NuxtLink :to="'/post/' + post.documentId">
                <h5 class="truncate mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {{ post.title }}
                </h5>
              </NuxtLink>
              <!-- Описание -->
              <p class="text-sm font-normal text-gray-700 dark:text-gray-400">
                {{ post.desc }}
              </p>
            </div>
            <!-- Кнопка -->
            <NuxtLink
              :to="'/post/' + post.documentId"
              class="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Подробнее
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>
      <p v-if="posts.length === 0" class="mt-6 text-center">
        По вашему запросу ничего не найдено.
      </p>
    </main>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from "vue";
  import { useSearchStore } from "@/stores/search";
  
  const search = useSearchStore();
  const posts = ref([]);
  const base_url = "https://d19d642231aa.vps.myjino.ru";
  
  // Генерация случайного размера для карточек
  function randomSize() {
    const sizes = [
      "h-auto", // Автоматическая высота для корректного размещения контента
    ];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }
  
  async function searchAlert() {
    if (search.searchQuery) {
      try {
        const response = await $fetch(
          `https://d19d642231aa.vps.myjino.ru/api/posts?populate=*&filters[$or][0][title][$containsi]=${search.searchQuery}&filters[$or][1][body][$containsi]=${search.searchQuery}`
        );
        posts.value = response.data;
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
      }
    }
  }
  
  // Слушаем изменения в search.searchQuery
  watch(
    () => search.searchQuery,
    (newQuery) => {
      if (newQuery) {
        searchAlert();
      } else {
        posts.value = [];
      }
    }
  );
  
  onMounted(() => searchAlert());
  </script>
  
  <style scoped>
  main {
    overflow-y: auto;
    padding-bottom: 2rem; /* Для отступа внизу */
  }
  
  article img {
    object-fit: cover;
  }
  </style>
  
  