import { z } from 'zod'

export const organizationSchema = z.object({
  __typename: z.literal('Organization').default('Organization'),
  id: z.string(),
  ownerId: z.string(),
})

export type TOrganizationType = z.infer<typeof organizationSchema>
