import { mount, createLocalVue } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import ExampleCompositionApi from '@/components/ExampleCompositionApi.vue'

const localVue = createLocalVue()
localVue.use(createPinia())

describe('ExampleCompositionApi', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ExampleCompositionApi, {
      localVue,
      pinia: createTestingPinia()
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
