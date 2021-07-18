import { ForkEffect, put, /* call, */ takeLatest } from 'redux-saga/effects'

import { api } from '@utils'
import { LoginForm, UsersResponse } from '@types'

import { USERS_GET_START, USERS_GET_SUCCESS, USERS_GET_FAILURE } from '../../actionsTypes'

export function* getUsers() {
   try {
      const usersResponse: UsersResponse = yield api.post<UsersResponse>('/users')
      yield put({ type: USERS_GET_SUCCESS, payload: usersResponse })
   } catch (err) {
      put({ type: USERS_GET_FAILURE })
      console.log(err)
   }
}

function* users(): Generator<ForkEffect<never>, void, unknown> {
   yield takeLatest(USERS_GET_START, getUsers)
}

export default users
