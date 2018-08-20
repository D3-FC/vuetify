import { createSimpleFunctional } from '../../util/helpers'
import VCard from './VCard'
import VCardTitle from './VCardTitle'
import Vue from 'vue'

const VCardActions = Vue.extend(createSimpleFunctional('v-card__actions'))
const VCardText = Vue.extend(createSimpleFunctional('v-card__text'))
const VCardHeader = Vue.extend(createSimpleFunctional('v-card__header'))
const VCardSubtitle = Vue.extend(createSimpleFunctional('v-card__subtitle'))

export {
  VCard,
  VCardActions,
  VCardText,
  VCardHeader,
  VCardSubtitle,
  VCardTitle
}

export default {
  $_vuetify_subcomponents: {
    VCard,
    VCardActions,
    VCardText,
    VCardHeader,
    VCardSubtitle,
    VCardTitle
  }
}
