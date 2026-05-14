<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: 'Project',
});

const project = $fetch('https://api.github.com/users/andimarcell/repos'); console.log(project);

// const projects = useFetch('https://api.github.com/users/andimarcell/repos'); console.log(projects);

const {error, pending, data} = await useFetch('https://api.github.com/users/andimarcell/repos');
</script>

<template>
    <h1>Project</h1>
    <section v-if="pending">Loading</section>
    <section v-else-if="error">Something went wrong</section>
    <section v-else>{{ data }}</section>
</template>