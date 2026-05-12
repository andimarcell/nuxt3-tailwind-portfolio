<script setup>
const route = useRoute();
console.log(route);
</script>

<template>
    <h1>Blog</h1>
    <p>ini adalah halaman {{ route.params.slug }}</p>
</template>