<template>
    <Navbar />
    <main class="w-full px-4 lg:px-40">
    <!-- Загрузка -->
    <div class="ns_post text-center text-gray-500" v-if="status === 'pending'">
      Loading ...
    </div>

    <!-- Основной контент -->
    <div class="ns_post overflow-y-auto" v-else >
      <!-- Изображение поста -->
      <div
        class="h-60 sm:h-80 lg:h-96 rounded-2xl my-4 bg-cover bg-center transition-transform duration-500 hover:scale-105"
        :style="'background-image: url(' + base_url + post.image.url + ')'"
      ></div>

      <!-- Заголовок -->
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 flex items-center"
      >
        {{ post.title }}
        <Share class="ml-4" />
      </h1>

      <!-- Метаданные -->
      <p
        class="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 opacity-70 mb-4"
      >
        {{ formatDate(post.publishedAt.substring(0, 10)) }} • {{ post.views }} просмотров
      </p>

      <!-- Текст поста -->
      <div 
        class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed" 
      v-html="post.body ? markdown.render(post.body) : ''">

    </div>
    </div>

    <!-- Навигация -->
    <div class="flex items-center mt-8 space-x-2">
      <svg
        class="rtl:rotate-180 w-4 h-4 text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
      <li aria-current="page" class="list-none">
        <div class="flex items-center text-gray-600">
          <svg
            class="rtl:rotate-180 w-4 h-4 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span
            class="ml-2 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400"
          >
            <strong>{{ post.title }}</strong>
          </span>
        </div>
      </li>
    </div>
  </main>
  </template>
  

<script setup >
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt();
const { id } = useRoute().params;
const base_url = 'https://d19d642231aa.vps.myjino.ru';

// Используем useLazyFetch для получения данных поста
const { status, data: post } = await $fetch(`${base_url}/api/posts/${id}?populate=*`);

// Создаем реактивные переменные
const mark = ref('');
const viewsCount = ref(0);

// Слушаем изменения в данных поста
watch(post, (newPost) => {
  if (newPost) {
      mark.value = markdown.render(newPost.body);
      viewsCount.value = newPost.views;
      updateViews(); // Обновляем просмотры при получении новых данных
  }
});

// Функция для обновления счетчика просмотров
const updateViews = async () => {
  await $fetch(`${base_url}/api/posts/${id}`, {
      method: 'PUT',
      body: {
          data: {
              views: viewsCount.value + 1,
          },
      },
  });
};

// Используем onMounted для установки заголовка
onMounted(async () => {
  const apiConfig = await $fetch(`${base_url}/api/config?populate=*`);
  const config = apiConfig.data;

  useHead({
      title: `${post.value.title} - ${config.title}`,
  });
});

// Функция для форматирования даты
function formatDate(dateString) {
  if (dateString) {
      const date = new Date(Date.parse(dateString));
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const monthNames = [
          'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
          'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
      ];
      return `${day} ${monthNames[month - 1]}`;
  } else {
      return '';
  }
}
</script>