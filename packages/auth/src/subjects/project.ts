import { z } from 'zod'

import { projectSchema } from '../models/project'

export const ProjectSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([z.literal('Project'), projectSchema]),
])

export type TProjectSubjectType = z.infer<typeof ProjectSubject>
