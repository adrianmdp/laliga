import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reduxSaga from 'redux-saga'

import { auth, users } from '@redux/reducers'

import allSaga from '../sagas'

declare global {
   interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
   }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = reduxSaga()

const reducers = combineReducers({ auth, users })

const store = {
   ...createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware))),
   runSaga: sagaMiddleware.run(allSaga),
}

export { store }
