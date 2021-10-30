import { defineNuxtMiddleware } from '@nuxtjs/composition-api'

export default defineNuxtMiddleware(ctx => {
  // eslint-disable-next-line no-console
  console.log('from middleware', ctx.$env)
})
