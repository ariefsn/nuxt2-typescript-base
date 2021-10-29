import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    value: 0
  }),
  getters: {
    doubleCount: ({ value }) => value * 2
  },
  actions: {
    increment() {
      this.value++
    },
    decrement() {
      this.value--
    }
  }
})
