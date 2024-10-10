<template>
    <h2>Блог</h2>
  
    <main>

        <article v-for="(post, index) in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <img :src="base_url + post.image.url" :alt=post.image.alternativeText>
          <p>{{ post.description }}</p>
          <NuxtLink :to="'/post/' + post.documentId">Подробнее</NuxtLink>
          <li><NuxtLink :style="'background:'+post[0].bg" :to="'/post/' + post.documentId">{{ post[0] }}</NuxtLink></li>
        </article>
 
    </main>
  
  </template>
    
  <style scoped>
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
  background-color: rgba(255, 255, 255, 0.1);
  border: 5px solid transparent;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  transition: transform 0.3s;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  width: 300px; /* Ширина карточки */
  position: relative;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2); /* Subtle shadow */
  overflow: hidden; /* To ensure pseudo-elements don't overflow */
  transition: transform 0.3s;
}
article::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 10px; /* Match the card's border-radius */
  z-index: -1; /* Place it behind the card */
  
  filter: blur(10px); /* Blur for glowing effect */
}





article img {
  border-radius: 10px;
  width: 200px;
  height: 200px;
  object-fit: cover;

}

article h3 {
  height: 70px;
}

article p {
  height: 56px;
}

article p,
article h3 {
  display: -webkit-box;
 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-wrap: wrap;
}
</style>
  
<!-- <style scooped>




articles-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.article-card {
  background-color: rgba(255, 255, 255, 0.1);
  border: 5px solid transparent;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  transition: transform 0.3s;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  width: 300px; /* Ширина карточки */
}

/* Градиенты для рамок */


.article-card h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.article-card p {
  color: #ffffff;
  margin-bottom: 20px;
}

.article-card:hover {
  transform: scale(1.05);
}

.read-more {
  display: inline-block;
  padding: 10px 20px;
  background-color: white;
  color: black;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.read-more:hover {
  background-color: #ddd;

   .posts{
        gap: 20px;
        display: flex;
        gap: 10px;
        
       
    }
    article{
        width: 400px;
        height: 450px;
        padding: 10px;
        border-radius: 10px;
        background-color:#ebebeb;
        color:#18171c;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 15px;
         
    }
     img{
        height: 300px;
        width: 300px;
        object-fit: cover;
        
    } 
   
  
    
  
</style> -->
<script setup>
const api = await $fetch('http://localhost:1337/api/posts?populate=*')
const posts = api.data

const base_url = "http://localhost:1337"
</script>