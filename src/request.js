import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'
// import store from '../store'
// import { getToken } from '@/utils/auth'

let BASE_URL = ''
if (process.env.NODE_ENV == 'production') {
  BASE_URL = ''
} else {
  BASE_URL = 'https://api.bilibili.com/'
}

const request = axios.create({
  baseURL: BASE_URL,
  timeout: 5000 
})

// request拦截器
request.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// respone拦截器
request.interceptors.response.use(
  res => {
    const data = res.data
    const error = data.error ? data.error : data.code
    const errmsg = data.errmsg ? data.errmsg : data.message
    if (error !== 0) {
      // Message({
      //   message: errmsg,
      //   type: 'error',
      //   duration: 5 * 1000
      // })

      // if (error === 50008 || error === 50012 || error === 50014) {
      //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
      //     confirmButtonText: '重新登录',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }).then(() => {
      //     location.reload()// 为了重新实例化vue-router对象 避免bug
      //   })
      // }
      return Promise.reject('error')
    } else {
      return res.data
    }
  },
  err => {
    console.log('err' + err) 
    // Message({
    //   message: '网络错误',
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(err)
  }
)

export default request
