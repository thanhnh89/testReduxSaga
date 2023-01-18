import { combineReducers } from 'redux'
import dashboardReducer from './dashboardReducer'

const initState = {
  isError: false,
  errorMessage: '',
  dataRecruit: [],
  isLoading: false,
}

const RecruitReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'GET_ALL_RECRUIT':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_ALL_RECRUIT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataRecruit: action.payload.data,
      }
    case 'GET_ALL_RECRUIT_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  RecruitReducer, // demo multi reducer
  dashboardReducer,
})

export default rootReducer
