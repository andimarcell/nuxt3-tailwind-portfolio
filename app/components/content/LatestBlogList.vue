<script setup>
const props = defineProps({
  limit: { type: Number, default: null },
});

const { data: posts } = await useAsyncData("latest-posts", () => {
  return queryCollection("blog")
    .select("path", "title", "publishedAt")
    .where("path", "!=", "/blog")
    .order("publishedAt", "DESC")
    .limit(props.limit)
    .all();
});
</script>

<template>
  <BlogList v-slot="{ posts }" :limit="limit">
    <div v-for="post in posts" :key="post.path">
      <NuxtLink :to="post.path">
        <h3>{{ post.title }}</h3>
      </NuxtLink>
    </div>
  </BlogList>
</template>
