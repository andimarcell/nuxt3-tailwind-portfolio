<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: 'Blog',
});

const {data: posts } = await useAsyncData('blog-list', () => {
    return queryCollection('blog').all();
});
console.log(posts.value);
</script>

<template>
    <h1>Blog</h1>
    <p>Blog page</p>
</template>