import axios from 'axios'

const request = axios.create({
  baseURL: 'http://159.75.169.224:1236',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const { data } = response
    return data
  },
  (error) => {
    console.error('请求失败:', error)
    return Promise.reject(error)
  },
)

// 封装post请求
export const post = (url, data = {}) => {
  return request.post(url, data)
}

export default request