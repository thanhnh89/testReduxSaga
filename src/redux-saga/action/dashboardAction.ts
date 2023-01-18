import { GET_USER_INFO, SET_USER_INFO, GET_LIST_POST } from '../const/dashboard'

export const getUserInfo = (
  onSuccess?: (response: any) => void,
  onError?: (error: any) => void,
) => ({
  type: GET_USER_INFO,
  onSuccess,
  onError,
})

export const setUserInfo = (data: any) => ({
  type: SET_USER_INFO,
  data,
})

export const getListPost = (
  onSuccess?: (response: any) => void,
  onError?: (error: any) => void,
) => ({
  type: GET_LIST_POST,
  onSuccess,
  onError,
})
