<template>
 
  <NuxtPage />
  
</template>
<script setup>
  const base_url = 'http://localhost:1337' 
  const api = await $fetch(`${base_url}/api/my-blog?populate=*`)
  const config = api.data

  useHead({
    title: config.title,
    meta: [
      { name: 'description', content: config.description },
      { name: 'keywords', content: config.keyword },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: base_url+config.favicon.url },
    ],
    bodyAttrs:{
      class:'w-full h-screen fixed inset-0 p-0'
    }
  })
</script>
<style>


</style>