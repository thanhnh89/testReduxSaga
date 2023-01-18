import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer/rootReducer'
import rootSaga from './saga/rootSaga'

const sagaMiddle = createSagaMiddleware()
// const composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnhancers = compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddle)),
)

sagaMiddle.run(rootSaga)

export default store
