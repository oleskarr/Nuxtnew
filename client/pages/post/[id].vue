

<!--  -->
  
<template>

    <!-- хлебные крошки -->
    <!-- <nav>
        <ul>
            <li class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"><NuxtLink to="/blog">Блог</NuxtLink></li>
            <li class="title"><NuxtLink :style="{background:post.categories[0].bg}" :to="'/category/' + post.categories[0].documentId">{{ post.categories[0].title }}</NuxtLink></li>

            <li><strong>{{ post.title }}</strong></li>
        </ul>
    </nav> -->
   

<!-- Breadcrumb -->
<nav class=" w-max flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        <NuxtLink to="/blog">Блог</NuxtLink>
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">><NuxtLink :style="{background:post.categories[0].bg}" :to="'/category/' + post.categories[0].documentId">{{ post.categories[0].title }}</NuxtLink></a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"><strong>{{ post.title }}</strong></span>
      </div>
    </li>
  </ol>
</nav>

    <!-- тело статьи -->
    <main>
        <h1>{{ post.title }}</h1>
        <p class="date">Дата публикации: <span>{{ post.publishedAt }}</span></p>
        <img :src=base_url+post.image.url :alt=post.image.alternativeText>
        <div v-html="mark"></div>
    </main>
</template>

<style scoped>

main{
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
}
   
    img{
        width: 202px;
        height: 202px;
        object-fit: cover;
    }
</style>

<script setup>
import MarkdownIt from "markdown-it";
const markdown = new MarkdownIt();
const { id } = useRoute().params
const api = await $fetch(`http://localhost:1337/api/posts/${id}?populate=*`);
const post = api.data;
const mark = markdown.render(post.body);

const base_url = 'http://localhost:1337'

const apiConfig = await $fetch(`${base_url}/api/my-blog?populate=*`)
const config = apiConfig.data
useHead({
    title: `${post.title} - ${config.title}`
})
</script>

