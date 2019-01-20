import request from '@/request'

export function getTestInfo(data) {
	return Promise.resolve().then(() => {
		setTimeout(function() {
			resolve(`testInfo:${data}`)
		}, 3000)
	})
}

export function getBoardData(data) {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve({
				error: 0,
				errmsg: '',
				data: ['111', '222', '333']
			})
		}, 100)
	})
}

export function getDetail(name) {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve({
				error: 0,
				errmsg: '',
				data: {
					name: name,
					desc: Math.random().toString().split('').reduce((str, item) => {
						str += item.charCodeAt().toString(28)
						return str
					}, '')
				}
			})
		})
	})
}
