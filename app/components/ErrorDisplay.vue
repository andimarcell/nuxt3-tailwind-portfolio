<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  showButton: { type: Boolean, default: true }, // Kontrol apakah tombol bawaan muncul
  to: { type: String, default: '/' },
  label: { type: String, default: 'Kembali ke Beranda' }
});
</script>

<template>
  <div class="text-center mt-20 not-prose">
    <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4">
      {{ title }}
    </h1>
    <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
      {{ description }}
    </p>
    
    <!-- Tombol bawaan hanya muncul jika showButton true -->
    <NuxtLink 
      v-if="showButton"
      :to="to" 
      class="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      {{ label }}
    </NuxtLink>
    
    <!-- Slot ini memungkinkan kamu menyisipkan tombol custom dari parent -->
    <slot name="action" />
  </div>
</template>