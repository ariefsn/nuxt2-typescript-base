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
    coverage: {
      branches: process.env.COVERAGE_BRANCHES ? parseInt(process.env.COVERAGE_BRANCHES) : 0,
      functions: process.env.COVERAGE_FUNCTIONS ? parseInt(process.env.COVERAGE_FUNCTIONS) : 0,
      lines: process.env.COVERAGE_LINES ? parseInt(process.env.COVERAGE_LINES) : 0,
      statements: process.env.COVERAGE_STATEMENTS ? parseInt(process.env.COVERAGE_STATEMENTS) : 0,
    }
  }

  inject('env', env)
}

export default envVariable
