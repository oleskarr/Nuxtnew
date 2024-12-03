<template>
  <h1>rtyjhhu</h1>
 
  <!-- <NuxtPage /> -->
  
</template>
<script setup>
  const base_url = 'https://d19d642231aa.vps.myjino.ru' 
  const api = await $fetch(`https://d19d642231aa.vps.myjino.ru
/api/my-blog?populate=*`)
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