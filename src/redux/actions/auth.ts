import {
   USER_AUTH_START,
   USER_AUTH_SUCCESS,
   USER_AUTH_FAILURE,
   USER_AUTH_OFF_START,
} from '@redux/actionsTypes'
import { LoginForm } from '@types'

const authStart = ({
   email,
   password,
}: LoginForm): { type: string; email: string; password: string } => ({
   type: USER_AUTH_START,
   email,
   password,
})

const authSuccess = (): { type: string } => ({
   type: USER_AUTH_SUCCESS,
})

const authFailure = (): { type: string } => ({
   type: USER_AUTH_FAILURE,
})

const authOffStart = (): { type: string } => ({
   type: USER_AUTH_OFF_START,
})

export { authStart, authSuccess, authFailure, authOffStart }
