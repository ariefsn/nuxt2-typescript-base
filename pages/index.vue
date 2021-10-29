<template>
  <!-- <Tutorial/> -->
  <ExampleCompositionApi />
</template>

// <script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ExampleCompositionApi from '~/components/ExampleCompositionApi.vue'

export default defineComponent({
	components: {
		ExampleCompositionApi,
	},
})
</script>
