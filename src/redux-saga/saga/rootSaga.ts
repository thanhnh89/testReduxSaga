import { fork } from 'redux-saga/effects'
import loginSaga from './loginSaga'
import dashboardSaga from './dashboardSaga'

function* rootSaga() {
  yield fork(loginSaga)
  yield fork(dashboardSaga)
}

export default rootSaga
