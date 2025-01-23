<template>
  <main class="w-full lg:px-40">
      <div class="ns_post" v-if="status === 'pending'">
          Loading ...
      </div>
      <div class="ns_post" v-else>
          <div class="h-80 rounded-2xl my-4 bg-fixed bg-[length:100%_600px]" :style="'background-image: url(' + base_url + post.image.url + ')'"></div>
          <h1 class="relative text-4xl">{{ post.title }} <Share /></h1>
          <p class="opacity-40">{{ formatDate(post.publishedAt.substring(0, 10)) }} • {{ post.views }} просмотров</p>
          <div v-html="mark"></div>
      </div>
      <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        
                    </div>
                
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                            <strong>{{ post.title }}</strong>
                        </span>
                    </div>
                </li>
            
        
      
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