import { z } from 'zod';

export const IssueSchema = z.object({
  id: z.number(),
  title: z.string(),
  type: z.string(),
  status: z.string(),
  description: z.string(),
  reporter: z.string(),
  assignee: z.string(),
  userIds: z.array(z.number()),
  priority: z.string(),
  listPosition: z.number().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type Issue = z.infer<typeof IssueSchema>;