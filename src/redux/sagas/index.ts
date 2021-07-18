import { all } from 'redux-saga/effects'

import auth from './auth'
import users from './users'

// eslint-disable-next-line
export default function* allSaga() {
   yield all([auth(), users()])
}
