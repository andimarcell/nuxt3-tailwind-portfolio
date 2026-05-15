<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Blog",
});

const route = useRoute();
console.log(route);

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

useSeoMeta({
  title: () => page.value?.title,
  description: () => page.value?.description,
  ogTitle: () => page.value?.title,
  ogDescription: () => page.value?.description,
  twitterTitle: () => page.value?.title,
  twitterDescription: () => page.value?.description,
});
</script>

<template>
  <article class="prose dark:prose-invert max-w-none">
    <template v-if="page">
      <div class="mb-10 pb-8 border-b border-gray-200 dark:border-gray-700">
        <h1 class="text-4xl font-bold mb-4">{{ page.title }}</h1>
        <p class="text-xl text-gray-500 dark:text-gray-400">
          {{ page.description }}
        </p>
      </div>
      <ContentRenderer :value="page" />
    </template>

    <div v-else class="text-center mt-10">
      <h1 class="text-2xl font-bold">404 - Tulisan tidak ditemukan</h1>
      <p>Sepertinya tulisan yang kamu cari tidak ada di halaman ini.</p>
    </div>
  </article>
</template>
