/**
 * 封装请求
 */
import axios from 'axios'
import config from '../config'
const loadingEl = document.getElementById('global-loading')

const $loading = (isShow) => {
  loadingEl.style.visibility = isShow ? 'visible' : 'hidden'
}
/* eslint-disable prefer-promise-reject-errors */
const instance = axios.create({
  method: 'post',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json'
  }
})
instance.interceptors.response.use(function (res) {
  $loading(false)
  return res
}, (err) => {
  if (err) {
    // alert('网络请求出错，联系管理员')
  }
})

const Authorization = localStorage.token || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdGFtcCI6IjE1OTUzMjM5NDkxOTEiLCJhZG1pbiI6IjEiLCJleHAiOjE1OTUzNTk5NDksImFjY291bnQiOiJhZG1pbiJ9.6M7wDZpFGm-iJ5KqhXM9gMrkHcJFeg-rC0_uet5ylCg'

export default async (url = '', params, option = {}) => {
  $loading(true)
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
