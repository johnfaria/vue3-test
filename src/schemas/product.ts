import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string().nullish(),
  name: z.string().min(1),
  active: z.boolean(),
});

export type Product = z.infer<typeof ProductSchema>;
