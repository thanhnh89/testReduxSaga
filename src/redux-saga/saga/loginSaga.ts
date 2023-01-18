import { call, put, takeLatest, fork } from 'redux-saga/effects'
import { sendGet, sendPost } from '../../service/axios'
import { LOGIN, LOGOUT, RESET_PASSWORD } from '../const/login'
import StorageUtils from '../../helper/StorageUtils'

function* login(action: any): Generator {
  try {
    const params = {
      userName: action.userName,
      password: action.password,
    }
    const response: any = yield call(sendPost, '/login', params)
    console.log('response = ', response)
    // localStorage.setItem('token',)
    StorageUtils.setItem('token', response.token)
    action.onSuccess(response)
  } catch (error) {
    action.onError(error)
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN, login)
}

function* logout(action: any): Generator {
  try {
    const params = {
      userName: action.userName,
      password: action.password,
    }
    const response: any = yield call(sendGet, '/logout', params)
    console.log('response = ', response)
    // localStorage.setItem('token',)
    StorageUtils.removeItem('token')
    action.onSuccess(response)
  } catch (error) {
    action.onError(error)
  }
}

function* watchLogout() {
  yield takeLatest(LOGOUT, logout)
}

function* loginSaga() {
  yield fork(watchLogin)
  yield fork(watchLogout)
}

export default loginSaga
