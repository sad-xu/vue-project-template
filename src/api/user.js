import request from '@/utils/request.js'

export function login({
  name,
  psd
}) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      name,
      psd
    }
  })
}
