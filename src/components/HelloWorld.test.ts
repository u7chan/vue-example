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
})
