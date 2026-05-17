<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Blog",
});

const route = useRoute();
// console.log(route);

// Tarik data spesifik menggunakan koleksi 'blog'
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first();
});

// Bersih, dinamis, tanpa duplikasi useHead
useSeoMeta({
  title: () => page.value?.title || "Blog",
  description: () => page.value?.description,
  ogTitle: () => page.value?.title,
  ogDescription: () => page.value?.description,
  twitterTitle: () => page.value?.title,
  twitterDescription: () => page.value?.description,
});
</script>

<template>
  <main class="">
    <article
      class="prose dark:prose-invert max-w-none prose-pre:bg-gray-200 dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
    >
      <template v-if="page">
        <!-- HEADER BLOG (Visual untuk Pembaca) -->
        <div
          class="mb-10 pb-8 border-b border-gray-200 dark:border-gray-700 not-prose"
        >
          <h1
            class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            {{ page.title }}
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-4">
            {{ page.description }}
          </p>

          <!-- Tanggal Publish Cantik dengan Icon -->
          <div
            v-if="page.publishedAt"
            class="flex items-center text-sm text-gray-500 dark:text-gray-400 font-medium"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <time :datetime="page.publishedAt">
              {{
                new Date(page.publishedAt).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }}
            </time>
          </div>
        </div>

        <!-- 💡 MASTER TABLE METADATA (Untuk Debugging/Portofolio) -->
        <section
          class="mb-12 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm not-prose"
        >
          <table
            class="w-full text-sm text-left text-gray-700 dark:text-gray-300"
          >
            <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
              <!-- Baris Title -->
              <tr>
                <th
                  class="px-6 py-4 font-semibold bg-gray-50 dark:bg-gray-950/50 w-32 border-r border-gray-200 dark:border-gray-800"
                >
                  title
                </th>
                <td class="px-6 py-4">{{ page.title }}</td>
              </tr>

              <!-- Baris Description -->
              <tr>
                <th
                  class="px-6 py-4 font-semibold bg-gray-50 dark:bg-gray-950/50 border-r border-gray-200 dark:border-gray-800"
                >
                  description
                </th>
                <td class="px-6 py-4">{{ page.description }}</td>
              </tr>

              <!-- Baris Head (Nested Table) -->
              <tr v-if="page.head && page.head.meta">
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
                          class="px-6 py-3 font-semibold border-r border-gray-200 dark:border-gray-800 w-1/2 text-center"
                        >
                          name
                        </th>
                        <th class="px-6 py-3 font-semibold w-1/2 text-center">
                          content
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      class="divide-y divide-gray-200 dark:divide-gray-800"
                    >
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

              <!-- Baris PublishedAt (Format Raw) -->
              <tr v-if="page.publishedAt">
                <th
                  class="px-6 py-4 font-semibold bg-gray-50 dark:bg-gray-950/50 border-r border-gray-200 dark:border-gray-800"
                >
                  publishedAt
                </th>
                <td class="px-6 py-4">{{ page.publishedAt }}</td>
              </tr>

              <!-- Baris TOC -->
              <tr v-if="page.toc !== undefined">
                <th
                  class="px-6 py-4 font-semibold bg-gray-50 dark:bg-gray-950/50 border-r border-gray-200 dark:border-gray-800"
                >
                  toc
                </th>
                <td class="px-6 py-4">{{ page.toc }}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <!-- ISI KONTEN BLOG (Markdown) -->
        <div class="grid grid-cols-6 gap-16">
          <!-- Grid otomatis menyesuaikan -->
          <div
            :class="{
              'col-span-4': page.body?.toc?.links?.length > 0,
              'col-span-6': !page.body?.toc?.links?.length,
            }"
          >
            <ContentRenderer :value="page" />
          </div>

          <!-- TOC hanya muncul jika links ada DAN jumlahnya lebih dari 0 -->
          <div
            class="col-span-2 not-prose"
            v-if="page.body?.toc?.links?.length > 0"
          >
            <aside class="sticky top-8">
              <div class="font-semibold mb-2">Table of Content</div>
              <nav>
                <TocLink :links="page.body.toc.links" />
              </nav>
            </aside>
          </div>
        </div>
      </template>

      <!-- ERROR STATE -->
      <div v-else class="text-center mt-20 not-prose">
        <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Sepertinya tulisan yang kamu cari tidak ada di halaman ini.
        </p>
        <NuxtLink
          to="/"
          class="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Kembali ke Beranda
        </NuxtLink>
      </div>
    </article>
  </main>
</template>
