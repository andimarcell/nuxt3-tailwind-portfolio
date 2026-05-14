<script setup>
useHead({
  titleTemplate: '%s - Porto',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: 'anonymous',
    }
  ]
});
</script>

<template>
  <div class="container mx-auto">
    <Header />
    <main class="p-2">
      <slot />
    </main>
  </div>
</template>

