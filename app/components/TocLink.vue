<script setup>
const route = useRoute();
defineProps({
    links: {
        type: Array,
    },
    level: {
        type: Number,
        default: 0,
    },
})
</script>

<template>
    <ul>
        <li v-for="link in links" :key="link.id">
            <NuxtLink :to="{ path: route.path, hash: `#${link.id}`}" :class="{ 'ml-4': level > 0 }">
                {{ link.text }}
            </NuxtLink>
            <TocLink v-if="link.children" :links="link.children" :level="level +1"/>
        </li>
    </ul>
</template>