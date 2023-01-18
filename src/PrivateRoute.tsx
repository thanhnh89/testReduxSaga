import React from 'react'
import { Route } from 'react-router-dom'
import StorageUtils from './helper/StorageUtils'
import Login from './containers/login/Login'

interface Props {
  path: string
  element: any
}

export const createPrivateRoute = (props: Props) => {
  const token: string = StorageUtils.getItem('token', '')
  if (token.length > 0) {
    return <Route {...props} />
  }

  const cloneProp: any = { ...props }
  cloneProp.element = <Login />
  return <Route {...cloneProp} />
}

export default createPrivateRoute
