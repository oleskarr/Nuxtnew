<template>
  <h2>Блог</h2>

  <main>
  <div class="posts">
      <article v-for="(post, index) in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <img :src=base_url+post.image.url>
      <p>{{ post.description }}</p>
      <NuxtLink :to="'/post/' + index">Подробнее</NuxtLink>
    </article>
  </div>
  </main>
</template>

<script setup>
const { id } = useRoute().params

const api = await $fetch(`http://localhost:1337/api/categories/${id}?populate=posts.image`)
//const filteredPosts = api.data.filter(post => post.id == id)
const posts = api.data.posts

const base_url = 'http://localhost:1337'
</script>





<style scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

@media screen and (max-width: 1024px) {
  .posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
}

article {
  background-color: #f5f5f5;
  padding: 10px;

  display: flex;
        flex-direction: column;
        justify-content: space-between;
}

article img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}

article p {
  height: 100px;
}

article a {
  display: block;
}
</style> 