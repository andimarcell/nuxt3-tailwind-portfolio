<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Project",
});

// const project = $fetch('https://api.github.com/users/andimarcell/repos'); console.log(project);

// const projects = useFetch('https://api.github.com/users/andimarcell/repos'); console.log(projects);
</script>

<template>
  <h1>Project</h1>
  <ProjectList />
</template>
