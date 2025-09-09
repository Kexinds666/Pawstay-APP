import { z } from 'zod';
export const CreateListingSchema = z.object({
  title: z.string().min(1),
  pricePerNight: z.number().int().positive()
});
export type CreateListingInput = z.infer<typeof CreateListingSchema>;
