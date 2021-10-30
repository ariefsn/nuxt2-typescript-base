/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin } from '@nuxt/types'

const http: Plugin = (ctx, inject) => {
  ctx.$axios.onRequest((config) => {
    ctx.$axios.setBaseURL(ctx.$env.apiUrl)

    return config
  })
}

export default http
