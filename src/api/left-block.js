
import Server from '@src/utils/fetch.js'

const form = new FormData()
form.append('account', 'admin')
form.append('password', 'Eshore#ES_2020')
export const login = () => {
  return Server('auth/login', form, { method: 'post' })
}

export const getLeftMenu = () => {
  return Server('index/leftMenu', null, { method: 'get' })
}

// ids = 1,2,3
export const getPoints = (ids) => {
  return Server(`index/itemsByIds?ids=${ids}`, null, { method: 'get' })
}

export const getAtmosphere = () => {
  return Server('index/weather', null, { method: 'get' })
}
