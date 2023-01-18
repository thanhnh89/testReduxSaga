import { call, put, takeLatest, fork } from 'redux-saga/effects'
import { sendGet, sendPost } from '../../service/axios'
import { GET_LIST_POST, GET_USER_INFO } from '../const/dashboard'
import { setUserInfo } from '../action/dashboardAction'

function* getUserInfo(action: any): Generator {
  try {
    const response: any = yield call(sendGet, '/getUserInfo')
    if (response) {
      yield put(setUserInfo(response))
    }
  } catch (error) {
    action.onError(error)
  }
}

function* watchGetUserInfo() {
  yield takeLatest(GET_USER_INFO, getUserInfo)
}

function* dashboardSaga() {
  yield fork(watchGetUserInfo)
  // yield fork(watchLogout)
}

export default dashboardSaga
