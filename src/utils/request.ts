import axios from 'axios'
import { message } from 'antd'

const service = axios.create({
  baseURL: '/',
  timeout: 50 * 1000,
  headers: { 'content-type': 'application/json;charset=utf-8'}
})

service.interceptors.request.use(config => {
  const { url, method } = config
  const headers = localStorage.getItem('Authorization')
    ? {
        Authorization: `${localStorage.getItem('Authorization')}`,
        'Content-Type': 'application/json;charset=UTF-8',
      }
    : {
        Authorization: '',
        'Content-Type': 'application/json;charset=UTF-8',
      };
  return {
    url,
    method,
    options: { ...config, headers },
  };
}, (error: any) => {
  console.log(error)
  return Promise.reject(error)
})


service.interceptors.response.use((response: any) => {
  const { status, data, statusText } = response
  switch(status) {
    case 200:
      return data
    case 500:
      message.error(`服务器异常!${statusText}`)
      break
    case 400:
      message.error(`客户端异常!${statusText}`)
  }
}, error => {
  console.log('error', error) 
  return Promise.reject(error)
})

export default service

