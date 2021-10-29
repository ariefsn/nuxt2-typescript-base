<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    <span>
      Counter: {{ counter.value }}
    </span>
    <div>
      <button @click="counter.increment">Increment</button>
      <button @click="counter.decrement">Decrement</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useCounterStore } from '@/store'

export default defineComponent({
	props: {
		title: {
			type: String,
			default: 'Counter with composition API',
		},
	},
	setup: () => {
		const counter = useCounterStore()

		return {
			counter,
		}
	},
})
</script>
