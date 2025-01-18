<template>
  <div class="flex h-screen overflow-hidden ">
    <!-- Левая панель -->
    <LeftPanel :panelWidth="panelWidth" @togglePanelWidth="togglePanelWidth" />

    <!-- Правая панель с динамическим контентом -->
    <div class="content flex-1 ">
     
      <NuxtPage />
      
    </div>

    <!-- Кнопка для изменения ширины -->
    <button
      @click="togglePanelWidth"
      class="btn-toggle"
      :style="{ left: `calc(${panelWidth}% - 24px)` }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
        <path
          :d="panelWidth === 80 ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LeftPanel from '@/components/LeftPanel.vue';
import Navbar from '@/components/Navbar.vue';

const base_url = "https://d19d642231aa.vps.myjino.ru";
const posts = ref([]);
const panelWidth = ref(30);


// Функция для изменения ширины панели
const togglePanelWidth = () => {
  panelWidth.value = panelWidth.value === 30 ? 80 : 30;
};

onMounted(async () => {
  try {
    const api = await $fetch(`${base_url}/api/posts?populate=*`);
    posts.value = api.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
});
</script>

<style scoped>
/* Стиль для кнопки изменения ширины */
.btn-toggle {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: calc(30% - 24px); /* Начальная позиция стрелки */
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
