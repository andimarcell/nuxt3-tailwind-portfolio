<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Project",
});

const { data: page } = await useAsyncData("project-page", () => {
  return queryCollection("page").path("/project").first();
});

useSeoMeta({
  title: () => page.value?.title || "Projects",
  description: () => page.value?.description,
});
// const project = $fetch('https://api.github.com/users/andimarcell/repos'); console.log(project);

// const projects = useFetch('https://api.github.com/users/andimarcell/repos'); console.log(projects);
</script>

<template>
  <main class="">
    <!-- Gunakan v-if="page" agar tidak error jika data belum selesai dimuat -->
    <article v-if="page" class="prose dark:prose-invert max-w-none">
        
        <!-- Header Halaman -->
        <h1 class="text-4xl font-extrabold mb-4">{{ page.title }}</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-10">{{ page.description }}</p>

        <!-- Pemutar Film (Membaca file project.md) -->
        <ContentRenderer :value="page" />
        
    </article>
  </main>
</template>
