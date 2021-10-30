<template>
  <div class="min-h-screen bg-gray-100 p-5">
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    >
    <div class="flex items-top justify-center text-center mb-5">
      <img
        :src="nuxtLogo"
        title="Nuxt Composition API"
        width="300"
        height="300"
      />
    </div>
    <h3 class="text-xl font-bold">
      {{ title }}
    </h3>
    <div class="my-3">
      Counter: {{ counter.value }}
      <br />
      Double count: {{ counter.doubleCount }}
      <br />
      <button
        class="bg-green-300 hover:bg-green-500 hover:text-white px-4 py-2 rounded-sm"
        @click="counter.increment"
      >Increment</button>
      <button
        class="bg-green-300 hover:bg-green-500 hover:text-white px-4 py-2 rounded-sm"
        @click="counter.decrement"
      >Decrement</button>
    </div>
    <div class="mb-3">
      <span class="font-bold">Device</span>
      <br />
      Device: {{ $device.userAgent }}
    </div>
    <div class="mb-3">
      <span class="font-bold">i18n</span>
      <br />
      <div class="mb-0">
        Hai: {{ $t('hello') }}
      </div>
      <br />
      <NuxtLink
        v-for="local in locales"
        :key="local.code"
        class="bg-green-300 hover:bg-green-500 hover:text-white px-4 py-2 rounded-sm"
        :to="switchLocalePath(local.code)"
      >{{ local.name }}</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'
import { useCounterStore } from '@/store'
import nuxtLogo from '@/assets/images/svg/nuxt-logo.svg'
import { Ii18nConfig } from '~/models/common'

export default defineComponent({
	props: {
		title: {
			type: String,
			default: 'Counter with composition API',
		},
	},
	setup: () => {
		const { i18n } = useContext()
		const counter = useCounterStore()

		const locales = computed<Ii18nConfig[]>(() =>
			(i18n.locales as Ii18nConfig[]).filter(e => e.code !== i18n.locale)
		)

		return {
			locales,
			nuxtLogo,
			counter,
		}
	},
})
</script>
