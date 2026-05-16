<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: 'Blog',
});

const {data: posts } = await useAsyncData('blog-list', () => {
    return queryCollection('blog').select('path','title').all();
});

</script>

<template>
    <section class="prose dark:prose-invert">
        <h1 class="text-2xl font-bold mb-10">Blog</h1>
        <ul>
            <li v-for="(post, index) in posts" :key="post.path">
                <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
            </li>
        </ul>
    </section>
</template>