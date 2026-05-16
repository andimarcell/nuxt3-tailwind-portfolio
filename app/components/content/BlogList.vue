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
  <section class="not-prose font-mono">
    <div class="column text-gray-400 text-sm">
        <div>date</div>
        <div>title</div>
    </div>
    <ul>
      <li v-for="(post, index) in posts" :key="post.path">
        <NuxtLink :to="post.path" class="column hover:bg-gray-100 dark:hover:bg-gray-800">
            <div>2024</div>
            <div>{{ post.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
@reference "../../assets/css/main.css";

.column {
    @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400;
}
</style>