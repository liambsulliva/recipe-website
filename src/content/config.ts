import { defineCollection, z } from 'astro:content';

const recipeCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        draft: z.boolean().optional(),
    })
 });

export const collections = {
  'recipes': recipeCollection,
};