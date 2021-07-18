import { all } from 'redux-saga/effects'

import auth from './auth/auth'

// eslint-disable-next-line
export default function* allSaga() {
   yield all([auth()])
}
