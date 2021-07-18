import { ForkEffect, put, /* call, */ takeLatest } from 'redux-saga/effects'

import { api } from '@utils'
import { UsersResponse } from '@types'

import { USERS_GET_START, USERS_GET_SUCCESS, USERS_GET_FAILURE } from '../../actionsTypes'
import { GenUsersResponse } from './types'

export function* getUsers({ page }: { page: string } & { type: string }): GenUsersResponse {
   try {
      const usersResponse: { data: UsersResponse } = yield api.get<{ data: UsersResponse }>(
         '/users',
         { params: { page } },
      )
      yield put({ type: USERS_GET_SUCCESS, payload: usersResponse.data })
   } catch (err) {
      put({ type: USERS_GET_FAILURE })
      console.log(err)
   }
}

function* users(): Generator<ForkEffect<never>, void, unknown> {
   yield takeLatest(USERS_GET_START, getUsers)
}

export default users
