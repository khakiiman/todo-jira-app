import { z } from 'zod';

export const ProjectFormSchema = z.object({
  id: z.number().optional(),
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be 2 or more characters long' }),
  url: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, { message: 'URLs must be a minimum of 5 characters' })
    .refine((val) => val.indexOf('.') !== -1, { message: 'Invalid URL' }),
  description: z.string(),
  category: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type ProjectForm = z.infer<typeof ProjectFormSchema>;
