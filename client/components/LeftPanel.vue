<template>
  <div
    :style="panelStyles"
    class="p-2 z-10 relative overflow-y-auto bg-rose-200"
  >
    <!-- Посты -->
    <div v-if="posts.length" class="flex flex-wrap justify-start gap-4 p-6">
      <article
        v-for="post in displayedPosts"
        :key="post.id"
        :style="randomPostStyle()"
        class="group bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1 mb-6"
      >
        <img
          :src="base_url + post.image.url"
          :alt="post.image.alternativeText"
          class="transition-transform duration-500 group-hover:scale-110"
          :style="imageStyle"
        />
        <div class="p-4 flex flex-col justify-between h-full">
          <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
            {{ post.title }}
          </h3>
          <p class="text-gray-700 text-base mb-5 flex-1 overflow-hidden">
            {{ post.description }}
          </p>
          <NuxtLink
            :to="'/post/' + post.documentId"
            class="btn-details mt-auto text-center"
          >
            Подробнее
          </NuxtLink>
        </div>
      </article>
    </div>
    <div v-else class="p-6 text-center">Загрузка постов...</div>

    <!-- Кнопка "Читать дальше" / "Скрыть" -->
    <button
      v-if="shouldShowToggleButton"
      @click="togglePanelWidth"
      type="button"
      class="w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {{ isExpanded ? 'Скрыть' : 'Читать дальше' }}
    </button>
  </div>

  <!-- Кнопка изменения ширины -->
  <button
    @click="togglePanelWidth"
    class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full shadow-lg w-[50px] h-[50px] z-10 flex items-center justify-center"
    :style="{ left: `calc(${panelWidth}% - 24px)` }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8 transition-transform duration-500"
      :class="{ 'rotate-180': isExpanded }"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
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

// Изменение ширины панели
const togglePanelWidth = () => {
  isExpanded.value = !isExpanded.value;
  panelWidth.value = isExpanded.value ? 80 : 30;

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
const shouldShowToggleButton = computed(
  () => displayedPosts.value.length < posts.value.length
);

// Стиль изображения
const imageStyle = {
  height: 'calc(33.33% - 4px)',
  objectFit: 'cover',
};

// Генерация случайных стилей для постов
const randomPostStyle = () => {
  const randomHeight = Math.floor(Math.random() * (350 - 250)) + 250;
  const randomWidth = Math.floor(Math.random() * (350 - 200)) + 200;

  return {
    height: `${randomHeight}px`,
    width: `${randomWidth}px`,
    minHeight: '350px',
    maxHeight: '500px',
  };
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
