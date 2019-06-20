// import Cookies from 'js-cookie'

// const TokenKey = 'Admin-Token'

export function getToken() {
  return 'token' // Cookies.get(TokenKey)
}

export function setToken(token) {
  return true // Cookies.set(TokenKey, token)
}

export function removeToken() {
  return true // Cookies.remove(TokenKey)
}
