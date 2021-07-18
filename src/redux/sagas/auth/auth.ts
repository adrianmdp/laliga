import { ForkEffect, put, /* call, */ takeLatest } from 'redux-saga/effects'

import { api } from '@utils'
import { LoginForm, LoginResponse } from '@types'

import { USER_AUTH_START, USER_AUTH_SUCCESS, USER_AUTH_FAILURE } from '../../actionsTypes'
import { GenLoginResponse } from './types'

export function* login(payload: LoginForm & { type: string }): GenLoginResponse {
   const { type, ...pay } = payload
   try {
      const { data }: LoginResponse = yield api.post<LoginResponse>('/login', { ...pay })
      yield put({ type: USER_AUTH_SUCCESS, payload: data.token })
   } catch (err) {
      put({ type: USER_AUTH_FAILURE })
      console.log(err)
   }
}

function* auth(): Generator<ForkEffect<never>, void, unknown> {
   yield takeLatest(USER_AUTH_START, login)
}

export default auth
