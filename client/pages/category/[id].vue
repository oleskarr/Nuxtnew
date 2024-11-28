<template>
  <h2>Блог</h2>

  <main>
  <div class="posts">
    <article v-for="(post, index) in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <img :src="base_url + post.img.url" :alt=post.img.alternativeText>
        <p>{{ post.desc }}</p>
        <NuxtLink :to="'/post/' + post.documentId">Подробнее</NuxtLink>
      </article>
  </div>
  </main>
</template>

<script setup>
const { id } = useRoute().params

const api = await $fetch(`https://d19d642231aa.vps.myjino.ru/api/categories/${id}?populate=posts.image`)
//const filteredPosts = api.data.filter(post => post.id == id)
const posts = api.data.posts

const base_url = 'https://d19d642231aa.vps.myjino.ru'
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