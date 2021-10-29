import { mount } from '@vue/test-utils'
import Tutorial from '@/components/Tutorial.vue'

describe('Tutorial', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Tutorial)
    expect(wrapper.vm).toBeTruthy()
  })
})
