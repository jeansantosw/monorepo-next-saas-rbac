import { z } from 'zod'

export const InviteSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('delete'),
  ]),
  z.literal('Invite'),
])

export type TInviteSubjectType = z.infer<typeof InviteSubject>
