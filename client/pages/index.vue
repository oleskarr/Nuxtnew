<template>
   <header>
    <h2>Home</h2>
   </header>
   <main>
    <article v-for="post in posts" :key="post.id">
        {{ post.title }}
        <img src="" alt="">
        <ul>
        <li v-for="tag in post.tags" :key="tag.id">
                {{ tag }}
        </li>
        </ul>
        <NuxtLink to="/post/${index}">interesting</NuxtLink>
    </article>
   </main>
</template>
<style scooped>
    main{
        gap: 10px;
        display: flex;
        
        flex-wrap: wrap;
        justify-content: space-between;
    }
    article{
       
        height: max-content;
        padding: 10px;
       
        border-radius: 10px;
        background-color: #121910;
        color: bisque;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
    ul{
       width: max-content;
       color:white;
      
      align-self: self-start;
        display: flex;
        flex-direction: column;
      
    }
  
</style>
<script setup>
    const dataTwice = await $fetch('https://dummyjson.com/posts')
    const posts = dataTwice.posts
    console.log(posts);
    
</script>