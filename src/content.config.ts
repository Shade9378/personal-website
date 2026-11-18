import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.md",
  }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    description: z.string(),
    abstract: z.string().optional(),
    year: z.union([z.number(), z.string()]).optional(),
    order: z.number().default(999),
    featured: z.boolean().default(false),
    category: z.enum(["current", "past"]).default("current"),
    status: z.string().optional(),
    affiliation: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    thumbnail: z.object({ src: z.string(), alt: z.string() }).optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    subprojects: z.array(z.object({
      title: z.string(),
      description: z.string().optional(),
      notice: z.string().optional(),
      contributors: z.array(z.string()).default([]),
      abstract: z.string().optional(),
      links: z.array(z.object({ label: z.string(), href: z.string().default("") })).default([]),
      gallery: z.array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() })).default([]),
    })).default([]),
    contributors: z.array(z.string()).default(["Anh Vu"]),
    tags: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = { projects };
