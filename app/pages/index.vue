<script setup>
definePageMeta({
    layout: 'app'
});
const route = useRoute();

useHead({
  title: 'Home',
});

const { data: page } = await useAsyncData("home-data", () => {
  return queryCollection("page").path("/").first();
});


</script>

<template>
    <article class="prose dark:prose-invert max-w-none">
        <ContentRenderer :value="page" />
    </article>
</template>