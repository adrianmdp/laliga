import { all } from 'redux-saga/effects'

import auth from './auth'

// eslint-disable-next-line
export default function* allSaga() {
   yield all([auth()])
}
