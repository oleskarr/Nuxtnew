<template>
     <nav>
        <ul>
            <li>
                <NuxtLink to="/blog">Home</NuxtLink>
            </li>
            >>
            <li>
                <strong>{{ post.title }}</strong>
            </li>
        </ul>
    </nav>
<main>
    <h1>{{ post.title }}</h1>
    <img :src=base_url+post.image.url :alt=post.image.alternativeText>
    <div v-html="mark"></div>
</main>
</template>
<script setup>
import MarkdownIt from "markdown-it"
const markdown = new MarkdownIt()

const { id } = useRoute().params
const api = await $fetch("http://localhost:1337/api/posts?populate=*")
const post = api.data[id]
const mark = markdown.render(post.body)

const base_url = 'http://localhost:1337'
</script>
<style scoped>
main{
    display: flex;
    flex-direction: column;
}
nav ul{
    display: flex;
    list-style-type: none;
    gap: 10px;


}
</style>