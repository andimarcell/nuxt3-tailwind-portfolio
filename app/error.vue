<script setup>
const props = defineProps({ error: Object });
</script>

<template>
  <NuxtLayout name="app">
    <ErrorDisplay 
      :title="error.statusCode.toString()" 
      :description="error.statusMessage || 'Terjadi kesalahan pada sistem.'"
    />
  </NuxtLayout>
</template>