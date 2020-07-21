
import Server from '@src/utils/fetch.js'

export const login = () => {
  return Server('auth/login', JSON.stringify({
    account: 'admin',
    password: 'Eshore#ES_2020'
  }), { method: 'post' })
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
