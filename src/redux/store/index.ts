import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reduxSaga from 'redux-saga'

import allSaga from '../saga'

const reducers = combineReducers({})

declare global {
   interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
   }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = reduxSaga()

const store = {
   ...createStore(reducers, applyMiddleware(sagaMiddleware), composeEnhancers()),
   runSaga: sagaMiddleware.run(allSaga),
}

export { store }
