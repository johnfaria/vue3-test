import { z } from 'zod';
import { ProductSchema } from './product';

export const CustomerSchema = z.object({
  id: z.string().nullish(),
  name: z.string().min(1),
  email: z.string().min(1),
  active: z.boolean(),
  products: z.array(ProductSchema),
});

export type Customer = z.infer<typeof CustomerSchema>;
