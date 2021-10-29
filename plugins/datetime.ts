/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin } from '@nuxt/types'
import dayjs, { ConfigType, Dayjs } from 'dayjs'

declare module 'vue/types/vue' {
  // inside Vue components
  interface Vue {
    $datetime(date?: ConfigType, locale?: string): Dayjs
  }
}

declare module '@nuxt/types' {
  // inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $datetime(date?: ConfigType, locale?: string): Dayjs
  }
  // nuxtContext
  interface Context {
    $datetime(date?: ConfigType, locale?: string): Dayjs
  }
}

declare module 'vuex/types/index' {
  // inside Vuex stores
  interface Store<S> {
    $datetime(date?: ConfigType, locale?: string): Dayjs
  }
}

const day: Plugin = (context, inject) => {
  inject('datetime', (date?: ConfigType, locale?: string): Dayjs => {
    dayjs.locale(locale)

    let d = dayjs()

    if (date) {
      d = dayjs(date)
    }

    if (locale) {
      d.locale(locale)
    }

    return d
  })
}

export default day
