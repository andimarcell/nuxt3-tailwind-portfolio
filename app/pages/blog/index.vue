<script setup>
definePageMeta({ layout: "app" });

// Ambil data index.md untuk SEO dan konten pembuka
const { data: page } = await useAsyncData('blog-index', () => {
  return queryCollection("blog").path("/blog").first();
});

useSeoMeta({
  title: () => page.value?.title || "Blog",
  description: () => page.value?.description
});
</script>

<template>
  <main class="max-w-4xl mx-auto px-4 py-12">
    <div class="prose dark:prose-invert max-w-none">
      <!-- Merender index.md yang berisi ::BlogList -->
      <ContentRenderer v-if="page" :value="page" />
      
      <ErrorDisplay 
        v-else 
        title="Blog Empty" 
        description="Belum ada konten di sini." 
      />
    </div>
  </main>
</template>