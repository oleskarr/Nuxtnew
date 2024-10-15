<template>
    <!-- хлебные крошки -->
    <nav>
        <ul>
            <li><NuxtLink to="/blog">Блог</NuxtLink></li>
            <li class="title"><NuxtLink :style="{background:post.categories[0].bg}" :to="'/category/' + post.categories[0].documentId">{{ post.categories[0].title }}</NuxtLink></li>
            <li><strong>{{ post.title }}</strong></li>
        </ul>
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
    li::before {
        content: ">>";
        margin-right: 10px;
    }
    li:first-child::before { 
        display: none;
    }

    nav ul{
        list-style: none;
        display: flex;
        gap: 10px;
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

