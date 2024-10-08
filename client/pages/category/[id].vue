<template>
  <h2>Блог</h2>

  <main>
  <div class="posts">
      <article v-for="(post, index) in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <NuxtLink :to="'/post/' + index">Подробнее</NuxtLink>
    </article>
  </div>
  </main>
</template>

<script setup>
const { id } = useRoute().params

const api = await $fetch(`http://localhost:1337/api/categories?populate=*`)
const filteredPosts = api.data.filter(post => post.id == id)
const posts = filteredPosts[0].posts

const base_url = 'http://localhost:1337'
</script>