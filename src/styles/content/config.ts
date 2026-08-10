import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['credit-check', 'background-check', 'finance', 'general']),
    author: z.string().default('ScoreView Team'),
  }),
});

export const collections = { blog };