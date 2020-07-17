/**
 * 封装请求
 */
import axios from 'axios'
import config from '../config'

/* eslint-disable prefer-promise-reject-errors */
const instance = axios.create({
  method: 'post',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default async (url = '', params = {}, option = {}) => {
  if (!url) {
    return Promise.reject('params \'url\' not exist！')
  }
  const method = option.method || 'post'
  if (url.indexOf('http') !== 0) {
    const prefix = config.apiPath
    if (typeof prefix === 'string') {
      url = prefix + url
    }
  }
  switch (method) {
    case 'get':
      return instance.get(url, {
        params: params
      })
    case 'upload':
      return instance.post(url, params, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    case 'info':
      return instance.get(url, {
        headers: {
          Authorization: params.header
        }
      })
    case 'post':
      return instance.post(url, params, option)
    case 'put':
      return instance.put(url, params, option)
    case 'patch':
      return instance.patch(url, params, option)
    case 'delete':
      return instance.delete(url, {
        params: params
      })
    default:
      return Promise.reject(`unknown request method '${method}'`)
  }
}
