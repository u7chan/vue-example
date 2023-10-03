import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  test('should be msg', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'hello',
      },
    })
    expect(wrapper.text()).toContain('hello')
  })

  test('should count up from 0 to 1', async () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'hello',
      },
    })
    expect(wrapper.text()).toContain('count is 0')
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('count is 1')
  })
})
