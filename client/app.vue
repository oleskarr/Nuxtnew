<template>
  <div class="flex h-screen overflow-hidden ">
    <!-- Левая панель -->
    <LeftPanel :panelWidth="panelWidth" @togglePanelWidth="togglePanelWidth" />

    <!-- Правая панель с динамическим контентом -->
    <div class="content flex-1 overflow-y-scroll scrol" v-if="index.aside">
     
      <NuxtPage />
      
    </div>

    <!-- Кнопка для изменения ширины -->
  
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LeftPanel from '@/components/LeftPanel.vue';
import Navbar from '@/components/Navbar.vue';
import { useIndexStore } from "@/stores/index";

const index = useIndexStore()

const base_url = "https://d19d642231aa.vps.myjino.ru";
const posts = ref([]);
const panelWidth = ref(30);
const visibleNuxtPage = ref(true)


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
