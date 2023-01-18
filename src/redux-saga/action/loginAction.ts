import { LOGIN, LOGOUT, RESET_PASSWORD } from '../const/login'

export const login = (
  email: string,
  password: string,
  onSuccess: (response: any) => void,
  onError: (error: any) => void,
) => ({
  type: LOGIN,
  email,
  password,
  onSuccess,
  onError,
})

export const logout = (
  onSuccess: (response: any) => void,
  onError: (error: any) => void,
) => ({
  type: LOGOUT,
  onSuccess,
  onError,
})

export const resetPassword = (
  email: string,
  onSuccess: (response: any) => void,
  onError: (error: any) => void,
) => ({
  type: RESET_PASSWORD,
  email,
  onSuccess,
  onError,
})
