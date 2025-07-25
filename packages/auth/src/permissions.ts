import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { TUserType } from './models/user'
import { role } from './roles'

type TPermissionsType = (
  user: TUserType,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<role, TPermissionsType> = {
  ADMIN: (user, { can, cannot }) => {
    can('manage', 'all')
    cannot(['transfer_ownership', 'update'], 'Organization')
    can(['transfer_ownership', 'update'], 'Organization', {
      ownerId: { $eq: user.id },
    })
  },

  MEMBER: (user, { can }) => {
    can('get', 'User')
    can(['get', 'create'], 'Project')
    can(['update', 'delete'], 'Project', { ownerId: { $eq: user.id } })
  },

  BILLING: (_, { can }) => {
    can('manage', 'Billing')
  },
}
