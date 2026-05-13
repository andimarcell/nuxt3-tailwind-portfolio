<script setup>
definePageMeta({
    layout: 'app'
})
const route = useRoute()

</script>

<template>
    <div>
        <h1>Home</h1>
        <p>Curren route: {{ route.path }}</p>
        <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about routing</a>
    </div>
</template>