export const SITE_TITLE = 'Jorge Oña';
export const SITE_DESCRIPTION = 'Welcome to my website!';

import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
  }),
});

export const collections = {
  services,
};
