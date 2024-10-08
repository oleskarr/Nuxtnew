<template>
   <header>
    <h2>Home</h2>
   </header>
   <main>
      <div class="posts">
        <article v-for="(post, index) in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <img :src="base_url + post.image.url" :alt=post.image.alternativeText>
          <p>{{ post.description }}</p>
          <NuxtLink :to="'/post/' + index">Подробнее</NuxtLink>
        </article>
      </div>
    </main>
</template>

    
  
  
<style scooped>
*{ margin: 0;
padding: 0;
}
    main{
        gap: 20px;
        display: flex;
        
       
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
            img{
                height: 300px;
                width: 300px;
                object-fit: cover;
            }
    }
    img{
        width: 500px;
        
    }
  
    
  
</style>
<script setup>
const api = await $fetch('http://localhost:1337/api/posts?populate=*')
const posts = api.data

const base_url = "http://localhost:1337"
</script>