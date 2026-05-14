<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: 'Project',
});

const project = $fetch('https://api.github.com/users/andimarcell/repos'); console.log(project);
</script>

<template>
    <h1>Project</h1>
</template>