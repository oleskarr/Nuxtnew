<template>
   <header>
    <h2>Home</h2>
   </header>
   <main>
    <article v-for="(post, index) in posts" :key="post.id" >
       <h3> {{ post.title }} </h3> 
       <img  :src=base_url+post.image.url >
       <p>{{ post.description }}</p>
       <NuxtLink :to="'/post/' + index ">More</NuxtLink>
    </article>
   </main>
</template>
<style scooped>
    main{
        gap: 10px;
        display: flex;
        
       
    }
    article{
        width: 400px;
        height: 500px;
        padding: 10px;
        border-radius: 10px;
        background-color:#ebc7df;
        color:#004524;
        display: flex;
        flex-direction: column;
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