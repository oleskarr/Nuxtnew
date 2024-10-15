<template>
    <h2>Блог</h2>

<main>
<article v-for="(post, index) in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <img :src="base_url + post.image.url" :alt=post.image.alternativeText>
          <p>{{ post.description }}</p>
          <NuxtLink :to="'/post/' + post.documentId">Подробнее</NuxtLink> 
</article>
</main>
  
  </template>
    
  <style scoped>
  @property --angle{
  syntax: "<angle>";
  initial-value: 0deg;
  inherits:false
}
h2 {
  margin-bottom: 40px;
  font-size: 36px;
}
main{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-template-rows: repeat(4, 1fr);
  gap: 40px;
  padding: 40px;
}

@media (max-width: 1024px) {
  main {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  main {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}

@media (max-width: 640px) {
  main {
    grid-template-columns: 1fr;
  }
}

article {
  box-sizing: border-box;
  background-color: rgb(0, 0, 0);
  padding: 1em;
  margin: 20px;
  text-align: center;
  border-radius: 10px;
  position: relative;
}


article::after, article::before {
  content: '';
  position: absolute;
 height: 100%;
 width: 100%;
 background-image:conic-gradient( from var(--angle), transparent 20%, #cdb4db, #ffc8dd,#ffafcc,#bde0fe,#a2d2ff);
 top: 50%;
 left: 50%;
 translate: -50% -50%;
 z-index: -2;
 padding: 3px;
 border-radius: 10px;
 animation: 3s spin linear infinite;
}
article::before{
  filter: blur(1.5rem);
  opacity:0.5;
}
@keyframes spin{
  from{
    --angle:0deg
  }
  to{
    --angle: 360deg
  }
}
article img {
  border-radius: 10px;
  width: 200px;
  height: 200px;
  object-fit: cover;

}

</style>
  
<script setup>
const api = await $fetch('http://localhost:1337/api/posts?populate=*')
const posts = api.data

const base_url = "http://localhost:1337"
</script>