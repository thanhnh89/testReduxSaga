import Axios from 'axios'
import { ServerErrorCode } from './networkConstant'

const BASE_URL = 'http://demo5432636.mockable.io/'

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: BASE_URL,
  withCredentials: false,
})

const axiosCustomInstance = (fullUrl: string | any) =>
  Axios.create({
    timeout: 3 * 60 * 1000,
    baseURL: fullUrl,
  })

axiosInstance.interceptors.request.use(
  (config: any) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    config.headers.redirect = 'follow'
    config.headers['Content-Type'] = 'text/plain'
    return config
  },
  (error) => Promise.reject(error),
)

const logout = () => {
  localStorage.removeItem('token')
  window.location.href = '/'
}

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: any) => {
    // const originalConfig = error.config
    switch (error.response.status) {
      case ServerErrorCode.EXPECTATION:
      case ServerErrorCode.BAD_REQUEST:
      case ServerErrorCode.BAD_GATEWAY:
      case ServerErrorCode.FORBIDDEN:
      case ServerErrorCode.INTERNAL_SERVER_ERROR:
      case ServerErrorCode.NOT_FOUND:
      case ServerErrorCode.TIMEOUT:
      case ServerErrorCode.WRONG_DATA_REQUEST:
        console.log('error ', error)
        return Promise.reject(error)
      case ServerErrorCode.UNAUTHORIZED:
        ;(window as any).location.href = '/login'
        break
    }
  },
)

export const sendGet = (url: string, params?: any) =>
  axiosInstance.get(url, { params }).then((res) => res.data)

export const sendPost = (url: string, params?: any, queryParams?: any) =>
  axiosInstance.post(url, params, { params: queryParams }).then(
    (res) => res.data,
    (error) => {
      // add for upload file
      return Promise.reject(error)
    },
  )
export const sendPut = (url: string, params?: any) =>
  axiosInstance.put(url, params).then((res) => res.data)
export const sendPatch = (url: string, params?: any) =>
  axiosInstance.patch(url, params).then((res) => res.data)
export const sendDelete = (url: string, params?: any) =>
  axiosInstance.delete(url, { params }).then((res) => res.data)

export const getCurrency = (params: any) =>
  sendGet('exchangerates_data/convert', params)
