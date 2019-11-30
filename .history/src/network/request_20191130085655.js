import axios from 'axios'

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })


  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  instance.interceptors.responce.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
}