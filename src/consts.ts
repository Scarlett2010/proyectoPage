export const SITE_TITLE = 'LEXLOCI ABOGADOS';
export const SITE_DESCRIPTION = 'Welcome to my website!';

import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  services,
};
