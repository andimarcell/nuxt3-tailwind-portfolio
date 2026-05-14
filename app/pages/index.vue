<script setup>
definePageMeta({
    layout: 'app'
});
const route = useRoute();

useHead({
  title: 'Home',
});

</script>

<template>
    <div>
        <h1 class="">Home</h1>
        <p>Curren route: {{ route.path }}</p>
        <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about routing</a>
    </div>
</template>