<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "About",
});
const route = useRoute();
// Tarik Data spesifik untuk path '/about'
const { data: page } = await useAsyncData("about-page", () => {
  return queryCollection("page").path("/about").first();
});
// NINJA SEO: Dinamis dan Aman di Root Level
useSeoMeta({
  title: () => page.value?.title || "About",
  description: () => page.value?.description || "Tentang Andi Marcell",
  ogTitle: () => page.value?.title || "About",
  ogDescription: () => page.value?.description || "Tentang Andi Marcell",
  keywords: "nuxt, vue, content, andi marcell, portofolio",
  author: "Andi Marcell",
});
</script>

<template>
  <main class="max-w-4xl mx-auto px-4 py-12">
    <template v-if="page">
      <!-- HEADER: Judul Halaman dari Frontmatter -->
      <div class="mb-10 pb-8 border-b border-gray-200 dark:border-gray-700">
        <h1
          class="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
        >
          {{ page.title }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          {{ page.description }}
        </p>
      </div>

      <!-- TABEL VISUALISASI FRONTMATTER (Sesuai Gambar Course) -->
      <!-- Menggunakan class 'not-prose' agar tidak bentrok dengan Tailwind Typography -->
      <section
        v-if="page.head"
        class="mb-12 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm not-prose"
      >
        <table
          class="w-full text-sm text-left text-gray-700 dark:text-gray-300"
        >
          <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
            <tr>
              <th
                class="px-6 py-4 font-semibold bg-gray-50 dark:bg-gray-950/50 w-32 border-r border-gray-200 dark:border-gray-800"
              >
                title
              </th>
              <td class="px-6 py-4">{{ page.title }}</td>
            </tr>
            <tr>
              <th
                class="px-6 py-4 font-semibold bg-gray-50 dark:bg-gray-950/50 border-r border-gray-200 dark:border-gray-800"
              >
                description
              </th>
              <td class="px-6 py-4">{{ page.description }}</td>
            </tr>

            <tr v-if="page.head.meta">
              <th
                class="px-6 py-4 font-semibold bg-gray-50 dark:bg-gray-950/50 align-top border-r border-gray-200 dark:border-gray-800"
              >
                head
              </th>
              <td class="p-0">
                <table class="w-full text-sm">
                  <thead>
                    <tr
                      class="bg-gray-50 dark:bg-gray-950/50 border-b border-gray-200 dark:border-gray-800"
                    >
                      <th
                        colspan="2"
                        class="px-6 py-3 text-center font-semibold"
                      >
                        meta
                      </th>
                    </tr>
                    <tr
                      class="bg-gray-50 dark:bg-gray-950/50 border-b border-gray-200 dark:border-gray-800"
                    >
                      <th
                        class="px-6 py-3 font-semibold border-r border-gray-200 dark:border-gray-800 w-1/2 text-center"
                      >
                        name
                      </th>
                      <th class="px-6 py-3 font-semibold w-1/2 text-center">
                        content
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr
                      v-for="(metaItem, index) in page.head.meta"
                      :key="index"
                      class="hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <td
                        class="px-6 py-3 border-r border-gray-200 dark:border-gray-800 text-center"
                      >
                        {{ metaItem.name }}
                      </td>
                      <td class="px-6 py-3 text-center">
                        {{ metaItem.content }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- KONTEN MARKDOWN (Menampilkan ## Me dan ## Skill) -->
      <!-- Menggunakan class 'prose' agar list bullet dan heading ter-style otomatis -->
      <article class="prose dark:prose-invert max-w-none">
        <ContentRenderer :value="page" />
      </article>
    </template>

    <!-- Jika file about.md tidak ditemukan atau path salah -->
    <div v-else class="text-center mt-20">
      <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      <p class="text-lg text-gray-600 dark:text-gray-400">
        Halaman About belum dibuat.
      </p>
    </div>
  </main>
</template>
