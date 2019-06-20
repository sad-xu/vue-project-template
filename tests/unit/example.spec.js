import * as filters from '@/utils/filters.js'

describe('testFilter', () => {
  it('testFilter-1', () => {
    expect(filters.testFilter('a')).toBe('btest')
  })
})

// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
