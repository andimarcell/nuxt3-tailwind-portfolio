<script setup>
useHead({
  htmlAttrs: {
    lang: 'id' 
  },
  titleTemplate: '%s - Porto',
  link: [
    // Preconnect untuk Google Fonts
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: 'anonymous',
    },
    // Favicon (Nanti siapkan gambar favicon.ico di folder public/)
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
});

useSeoMeta({
   title: 'Porto - Andi Marcell',
  description: 'Portofolio dan blog pribadi Andi Marcell, seorang Junior Frontend Engineer dari Balikpapan.',
  ogTitle: 'Porto - Andi Marcell',
  ogDescription: 'Portofolio dan blog pribadi Andi Marcell, seorang Junior Frontend Engineer dari Balikpapan.',
  ogImage: 'https://domainku.com/preview.png', // Ganti dengan link gambar asli nanti saat deploy
  ogUrl: 'https://domainku.com', // Ganti dengan link web asli nanti
  twitterCard: 'summary_large_image',
  twitterTitle: 'Porto - Andi Marcell',
  twitterDescription: 'Portofolio dan blog pribadi Andi Marcell, seorang Junior Frontend Engineer dari Balikpapan.',
  twitterImage: 'https://domainku.com/preview.png' // Samakan dengan ogImage
})

const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<template>
  <div class="container mx-auto ">
    <Header />
    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>

