<template>
  <header class="flex justify-between items-center">
    <div>
      <NuxtLink to="/" class="text-xl font-semibold link">Porto</NuxtLink>
    </div>
    <nav class="font-mono">
      <ul class="flex space-x-4">
        <li><NuxtLink to="/" class="link">Home</NuxtLink></li>
        <li><NuxtLink to="/about" class="link">About</NuxtLink></li>
        <li><NuxtLink to="/blog" class="link">Blog</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@reference "tailwindcss";

.link {
  @apply p-2 hover:bg-gray-200;
}
</style>
