import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    page: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        // NINJA TYPING: Definisikan struktur persis seperti di YAML!
        head: z.object({
          meta: z.array(
            z.object({
              name: z.string(),
              content: z.string()
            })
          )
        }).optional()
      })
    })
  }
})