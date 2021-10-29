/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin } from '@nuxt/types'
import { IEnv } from '@/models/common'

declare module 'vue/types/vue' {
  // inside Vue components
  interface Vue {
    $env: IEnv
  }
}

declare module '@nuxt/types' {
  // inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $env: IEnv
  }
  // nuxtContext
  interface Context {
    $env: IEnv
  }
}

declare module 'vuex/types/index' {
  // inside Vuex stores
  interface Store<S> {
    $env: IEnv
  }
}

const envVariable: Plugin = (context, inject) => {
  const env: IEnv = {
    host: process.env.HOST ?? '127.0.0.1',
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    apiUrl: process.env.API_URL ?? '',
    companyId: process.env.COMPANY_ID ?? ''
  }

  inject('env', env)
}

export default envVariable
