<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Blog",
});

const { data: posts } = await useAsyncData("blog-list", () => {
  return queryCollection("blog")
  .select('path', 'title')
  .where('path', '!=', '/blog') // Exclude index.md
  .all();
});
console.log(posts);
</script>

<template>
  <section class="not-prose">
    <ul>
      <li v-for="(post, index) in posts" :key="post.path">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
