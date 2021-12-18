// const BASE_URL = 'http://192.168.13.102:3000/'
const BASE_URL = 'http://localhost:3000/'

export const getUrl = endpoint => `${BASE_URL}${endpoint}`

export const getErrorMessage = error => {
  if (error.response) return { error: error.response.data }
  return { error: 'Network error' }
}

export const parseResponse = response => {
  return response
}
