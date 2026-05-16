import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// Skema head yang bisa dipakai berulang
const headSchema = z.object({
  meta: z.array(
    z.object({
      name: z.string(),
      content: z.string()
    })
  )
}).optional()

export default defineContentConfig({
  collections: {
    page: defineCollection({
      type: 'page',
      source: '*.md',
      schema: z.object({
        // Definisikan struktur persis seperti di YAML!
        head: headSchema,
      })
    }),

    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md', // Pastikan file markdown contoh tadi ada di folder content/blog/
      schema: z.object({
        head: headSchema,
        publishedAt: z.string().optional(), // Tambahan dari frontmatter-mu
        toc: z.boolean().optional()         // Tambahan dari frontmatter-mu
      })
    })
  }
})