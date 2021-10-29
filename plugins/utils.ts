/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin } from '@nuxt/types'
import * as utils from '@/helper/utils'

declare module 'vue/types/vue' {
  // inside Vue components
  interface Vue {
    $utils: utils.IMethods
  }
}

declare module '@nuxt/types' {
  // inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $utils: utils.IMethods
  }
  // nuxtContext
  interface Context {
    $utils: utils.IMethods
  }
}

declare module 'vuex/types/index' {
  // inside Vuex stores
  interface Store<S> {
    $utils: utils.IMethods
  }
}

const utility: Plugin = (context, inject) => {
  inject('utils', utils)
}

export default utility
