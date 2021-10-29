import { mount, createLocalVue } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Index from '@/pages/index.vue'

const localVue = createLocalVue()
localVue.use(createTestingPinia())

describe('Page Root', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index, {
      localVue
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
