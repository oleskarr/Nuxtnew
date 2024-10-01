<template>
<main>
    <h1>{{ post.title }}</h1>
    <img :src=base_url+post.image.url alt="">
    <div v-html="mark"></div>
</main>
</template>
<script setup>
const { id } = useRoute().params
const api = await $fetch("http://localhost:1337/api/posts?populate=*")
const post = api.data[id]
const mark = post.body

const base_url = 'http://localhost:1337'
</script>
<style scoped>
main{
    display: flex;
    flex-direction: column;
}
</style>