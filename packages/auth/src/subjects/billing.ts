import { z } from 'zod'

export const BillingSubject = z.tuple([
  z.union([z.literal('manage'), z.literal('get'), z.literal('export')]),
  z.literal('Billing'),
])

export type TBillingSubjectType = z.infer<typeof BillingSubject>
