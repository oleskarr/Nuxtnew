<template>
  <div :style="panelStyles" class=" z-10 relative overflow-x-hidden overflow-y-auto bg-rose-200">
    <!-- Посты -->
    <div v-if="posts.length" class="flex w-full flex-wrap justify-start gap-4 p-6">
      <article 
  v-for="post in displayedPosts" 
  :key="post.id" 
  class="group bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1 mb-6 lg:mb-8"
>
  <img 
    :src="base_url + post.image.url" 
    :alt="post.image.alternativeText"
    class="transition-transform duration-500 group-hover:scale-110 object-cover w-full h-64 sm:h-80 lg:h-96" 
  />

  <div class="p-4 flex flex-col">
    <h3 
      class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors"
    >
      {{ post.title }}
    </h3>
    <p 
      class="text-gray-700 text-sm sm:text-base lg:text-lg flex-1 overflow-hidden mb-4"
    >
      {{ post.description }}
    </p>
    <NuxtLink 
      :to="'/post/' + post.documentId"
      class="inline-flex items-center text-xs sm:text-sm lg:text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-3 py-2 lg:px-4 lg:py-3"
    >
      Подробнее
      <svg 
        class="rtl:rotate-180 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ms-2" 
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

      <button @click="togglePanelWidth"
    class="fixed right-[-10px] top-1/2 bg-blue-500 text-white p-3 rounded-full shadow-lg w-[70px] h-[70px] z-10 flex items-center justify-center"
    :style="{ left: `calc(${panelWidth}% - 85px)` }"> <!-- Изменено на -55px -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 transition-transform duration-500"
        :class="{ 'rotate-180': isExpanded }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
</button>
    </div>
    <div v-else class="p-6 text-center">Загрузка постов...</div>


  </div>

  <!-- Кнопка изменения ширины -->

</template>


<script setup>
import { ref, computed, onMounted } from 'vue';


const base_url = 'https://d19d642231aa.vps.myjino.ru';
const posts = ref([]);
const displayedPosts = ref([]);
const panelWidth = ref(30);
const isExpanded = ref(false);

// Загрузка данных
onMounted(async () => {
  try {
    const api = await $fetch(`${base_url}/api/posts?populate=*`);
    posts.value = api.data || [];
    displayedPosts.value = posts.value.slice(0, 5);
  } catch (error) {
    console.error('Ошибка загрузки постов:', error);
  }
});

// Подгрузка дополнительных постов
const loadMorePosts = () => {
  displayedPosts.value = posts.value.slice(0, displayedPosts.value.length + 4);
};
import { useIndexStore } from "@/stores/index";

  const index = useIndexStore()
// Изменение ширины панели
const togglePanelWidth = () => {
  
  index.aside = !index.aside
  console.log(index.aside);
  

  isExpanded.value = !isExpanded.value;
  panelWidth.value = isExpanded.value ? 100 : 15;

  if (isExpanded.value) {
    loadMorePosts();
  } else {
    displayedPosts.value = posts.value.slice(0, 5);
  }
};

// Вычисляемое свойство для стилей панели
const panelStyles = computed(() => ({
  width: `${panelWidth.value}%`,
  transition: 'width 0.5s ease-in-out, background-color 0.5s ease-in-out',
}));

// Показывать ли кнопку "Читать дальше"
const shouldShowToggleButton = true

// Стиль изображения
const imageStyle = {
  height: 'calc(40% - 4px)',
  objectFit: 'cover',
};

// Генерация случайных стилей для постов
const randomPostStyle = () => {
  if (isExpanded.value) {
    const panelWidthPixels = (panelWidth.value / 100) * window.innerWidth;
    const screenHeight = window.innerHeight;

    // Ширина от 1/4 до 1/2 ширины панели
    const randomWidth = Math.random() * (panelWidthPixels / 2 - panelWidthPixels / 4) + panelWidthPixels / 4;
    const randomHeight = Math.random() * (screenHeight / 1.5 - screenHeight / 3) + screenHeight / 3;

    return {
      width: `${randomWidth}px`,
      height: `${randomHeight}px`,
      transition: 'all 0.3s ease-in-out',
    };
  } else {
    const screenHeight = window.innerHeight;
    return {
      width: '100%', // Ширина поста остаётся фиксированной
      height: `${screenHeight / 2}px`, // Высота поста равна 1/3 высоты экрана
    };
  }
};



</script>



<style scoped>
/* Убираем отступы и создаем анимацию для правой части */
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

article img {
  border-radius: 10px;
  width: 100%;
  object-fit: cover;
}

.btn-details {
  background-color: #1d4ed8;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
}

.welcome-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
}
</style>
