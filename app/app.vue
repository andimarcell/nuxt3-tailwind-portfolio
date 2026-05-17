<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from {
  opacity: 0;
  filter: grayscale(1);
}

.page-leave-to {
  opacity: 0;
  filter: grayscale(1);
}
</style>