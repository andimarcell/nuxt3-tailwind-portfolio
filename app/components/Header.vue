<template>
  <header
    class="flex justify-between items-center border-gray-700 border-b mt-5"
  >
    <div class="flex items-center space-x-12">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold link">Porto</NuxtLink>
      </div>
      <nav class="font-mono">
        <ul class="flex space-x-4">
          <li><NuxtLink to="/" class="link">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="link">About</NuxtLink></li>
          <li><NuxtLink to="/project" class="link">Project</NuxtLink></li>
          <li><NuxtLink to="/blog" class="link">Blog</NuxtLink></li>
        </ul>
      </nav>
    </div>
    <ClientOnly>
      <ColorModeSelector />
    </ClientOnly>
  </header>
</template>

<style scoped>
@reference "tailwindcss";

.link {
  @apply p-2 hover:bg-gray-800;
}
</style>
