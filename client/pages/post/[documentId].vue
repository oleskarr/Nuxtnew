<template>
    <div v-if="post" class="p-6">
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <div :style="{ background: post.bg }" class=" mb-4 w-full h-48 rounded-lg shadow-lg"></div>
      <p class="text-lg mb-6">{{ post.description }}</p>
      <p class="text-base leading-relaxed">{{ post.body }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const post = ref(null)
  
  const fetchPost = async (documentId) => {
    const api = await $fetch(`https://d19d642231aa.vps.myjino.ru/api/posts?filters[documentId][$eq]=${documentId}`)
    post.value = api[0] // Берём первый элемент массива
  }
  
  onMounted(() => {
    fetchPost(route.params.documentId)
  })
  
  // Если маршрут меняется, загружаем новый пост
  watch(() => route.params.documentId, (newDocumentId) => {
    fetchPost(newDocumentId)
  })
  </script>
  