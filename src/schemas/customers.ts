import { z } from 'zod';

export const CustomerSchema = z.object({
  id: z.string().nullish(),
  name: z.string().min(1),
  email: z.string().min(1),
  active: z.boolean(),
});

export type Customer = z.infer<typeof CustomerSchema>;
