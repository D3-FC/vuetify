import { createSimpleFunctional } from '../../util/helpers'

import VList from './VList'
import VListGroup from './VListGroup'
import VListItem from './VListItem'
import VListTileAction from './VListTileAction'
import VListTileAvatar from './VListTileAvatar'

export { VList, VListGroup, VListItem, VListTileAction, VListTileAvatar }
export const VListTileActionText = createSimpleFunctional('v-list__tile__action-text', 'span')
export const VListItemContent = createSimpleFunctional('v-list__item__content', 'div')
export const VListTileTitle = createSimpleFunctional('v-list__tile__title', 'div')
export const VListTileSubTitle = createSimpleFunctional('v-list__tile__sub-title', 'div')

export default {
  $_vuetify_subcomponents: {
    VList,
    VListGroup,
    VListItem,
    VListTileAction,
    VListTileActionText,
    VListTileAvatar,
    VListItemContent,
    VListTileSubTitle,
    VListTileTitle
  }
}
