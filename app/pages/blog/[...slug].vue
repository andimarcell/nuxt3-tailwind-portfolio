<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: 'Blog',
});

const route = useRoute();
console.log(route);

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first();
});


</script>

<template>
    <article>
        <ContentRenderer v-if="page" :value="page" />
        <div v-else class="text-center mt-10">
            <h1 class="text-2xl font-bold">404 - Tulisan tidak ditemukan</h1>
            <p>Sepertinya tulisan yang kamu cari tidak ada di halaman ini.</p>
        </div>
    </article>
</template>