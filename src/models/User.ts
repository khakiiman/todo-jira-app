import { z } from 'zod';

export const UserSchema = z.array(
  z.object({
    id: z.number(),
    name: z
      .string()
      .trim()
      .min(2, { message: 'Name must be 2 or more characters long' }),
    email: z.string().trim().toLowerCase().email(),
    avatarUrl: z
      .string()
      .trim()
      .toLowerCase()
      .min(5, { message: 'URLs must be a minimum of 5 characters' })
      .refine((val) => val.indexOf('.') !== -1, { message: 'Invalid URL' }),
    projectId: z.number(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  })
);

export type User = z.infer<typeof UserSchema>;
