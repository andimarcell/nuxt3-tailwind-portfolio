<script setup>
useHead({
  title: "Blog",
});

const { data } = await useAsyncData("blog-list", () => {
  return queryCollection("blog")
    .select("path", "title", "publishedAt") // Pilih hanya field yang diperlukan
    .where("path", "!=", "/blog") // Exclude index.md
    .order("publishedAt", "DESC") // Urutkan berdasarkan tanggal publish terbaru
    .all();
});

const posts = computed(() => {
  if (!data.value) {
    return [];
  }
  const result = [];
  let lastYear = null;

  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear();
    post.isSameYear = year === lastYear;
    post.year = year; // Tambahkan properti year ke setiap post untuk memudahkan grouping
    result.push(post);
    lastYear = year;
  }
  return result;
});
// console.log(posts);
</script>

<template>
  <section class="not-prose font-mono">
    <div class="column text-gray-400 text-sm">
      <div>date</div>
      <div>title</div>
    </div>
    <ul>
      <li v-for="(post, index) in posts" :key="post.path">
        <NuxtLink
          :to="post.path"
          class="column hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div
            :class="{
              'text-white dark:text-gray-900': post.isSameYear,
              'text-gray-400 dark:text-gray-500': !post.isSameYear,
            }"
          >
            {{ post.year }}
          </div>
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
