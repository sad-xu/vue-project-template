import { shallowMount } from '@vue/test-utils'
import home from '@/views/home/home.vue'

describe('home.vue', () => {
	test('1', () => {
		const wrapper = shallowMount(home)
		const vm = wrapper.vm
		expect(vm.msg).toEqual('home')
	})
})



