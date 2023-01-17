import { z } from 'zod';

export const CustomerSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  active: z.boolean(),
});

export type Customer = z.infer<typeof CustomerSchema>;
