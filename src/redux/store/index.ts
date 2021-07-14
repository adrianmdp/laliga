import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reduxSaga from 'redux-saga'

import allSaga from '../saga'

declare global {
   interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
   }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = reduxSaga()

const reducers = combineReducers({})

const store = {
   ...createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware))),
   runSaga: sagaMiddleware.run(allSaga),
}

export { store }
