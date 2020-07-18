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

const Authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdGFtcCI6IjE1OTUwMzkzMjEyMjYiLCJhZG1pbiI6IjEiLCJleHAiOjE1OTUwNzUzMjEsImFjY291bnQiOiJhZG1pbiJ9.89IzYA5Z0L3rlVOr2mGbt5Xpj3YZKG55SEr_M0qH05E'

export default async (url = '', params, option = {}) => {
  if (!url) {
    return Promise.reject('params \'url\' not exist！')
  }
  const method = option.method || 'post'
  option.headers = { Authorization }

  if (url.indexOf('http') !== 0) {
    url = config.apiPath + url
  }
  switch (method) {
    case 'get':
      return instance.get(url, option)
    // case 'upload':
    //   return instance.post(url, params, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   })
    // case 'info':
    //   return instance.get(url, {
    //     headers: {
    //       Authorization: params.header
    //     }
    //   })
    case 'post':
      return instance.post(url, params, option)
    case 'put':
      return instance.put(url, params, option)
    // case 'patch':
    //   return instance.patch(url, params, option)
    case 'delete':
      return instance.delete(url, {
        params: params
      })
    default:
      return Promise.reject(`unknown request method '${method}'`)
  }
}

// export const http = axios.create({
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
