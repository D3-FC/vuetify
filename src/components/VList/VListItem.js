// Mixins
import Colorable from '../../mixins/colorable'
import Routable from '../../mixins/routable'
import Toggleable from '../../mixins/toggleable'

// Directives
import Ripple from '../../directives/ripple'

/* @vue/component */
export default {
  name: 'v-list-tile',

  directives: {
    Ripple
  },

  mixins: [
    Colorable,
    Routable,
    Toggleable
  ],

  inheritAttrs: false,

  props: {
    activeClass: {
      type: String,
      default: 'primary--text'
    },
    avatar: Boolean,
    inactive: Boolean,
    tag: String,
    threeLine: Boolean,
    twoLine: Boolean
  },

  data: () => ({
    proxyClass: 'v-list__item--active'
  }),

  computed: {
    listClasses () {
      return this.disabled
        ? { 'v-list--disabled': true }
        : undefined
    },
    classes () {
      return {
        'v-list__item': true,
        'v-list__item--link': this.isLink && !this.inactive,
        'v-list__item--avatar': this.avatar,
        'v-list__item--disabled': this.disabled,
        'v-list__item--active': !this.to && this.isActive,
        'v-list__item--three-line': this.threeLine,
        'v-list__item--two-line': this.twoLine,
        [this.activeClass]: this.isActive
      }
    },
    isLink () {
      return this.href || this.to ||
        (this.$listeners && (this.$listeners.click || this.$listeners['!click']))
    }
  },

  render (h) {
    const isRouteLink = !this.inactive && this.isLink
    const { tag, data } = isRouteLink ? this.generateRouteLink(this.classes) : {
      tag: this.tag || 'div',
      data: {
        class: this.classes
      }
    }

    data.attrs = Object.assign({}, data.attrs, this.$attrs)

    return h(tag, data, this.$slots.default)

    // return h('div', this.setTextColor(!this.disabled && this.color, {
    //   'class': this.listClasses,
    //   attrs: {
    //     disabled: this.disabled
    //   },
    //   on: {
    //     ...this.$listeners
    //   }
    // }), [])
  }
}
