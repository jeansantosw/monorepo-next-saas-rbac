import { z } from 'zod'

import { organizationSchema } from '../models/organization'

export const OrganizationSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('update'),
    z.literal('delete'),
    z.literal('transfer_ownership'),
  ]),
  z.union([z.literal('Organization'), organizationSchema]),
])

export type TOrganizationSubjectType = z.infer<typeof OrganizationSubject>
