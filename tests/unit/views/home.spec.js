import { shallowMount } from '@vue/test-utils'
import home from '@/views/home/home.vue'
// import * as request from '@/api/home.js'

// jest.mock('../_mocks_/home.js')



// const {Response} = jest.requireActual('@/api/home.js')

// request.mockImplementation(() => {
// 	return {
// 		getBoardData: () => {
// 			return {
// 				error: 0,
// 				errmsg: '',
// 				data: ['111', '222', '333']
// 			}
// 		}
// 	}
// })

describe('home.vue', () => {
	test('1', () => {
		const wrapper = shallowMount(home)
		const vm = wrapper.vm
		expect(vm.msg).toEqual('home')
	})

	test('getListData', () => {
		const wrapper = shallowMount(home)
		const vm = wrapper.vm

		// request.getBoardData.mockReturnValue(Promise.resolve(new Response({
		// 	error: 0,
		// 	errmsg: '',
		// 	data: ['111', '222', '333']
		// })))

		vm.getListData().then(() => {
			expect(vm.listData).toContain('unit')
		})
	})
})



