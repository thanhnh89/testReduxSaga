import { SET_USER_INFO } from '../const/dashboard'

const initialState = {
  userName: '',
  userId: -1,
  point: 0,
  testComplete: 0,
  testNotComplete: 0,
}

const dashboardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}

export default dashboardReducer
