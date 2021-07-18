import { USERS_GET_START, USERS_GET_SUCCESS, USERS_GET_FAILURE } from '@redux/actionsTypes'

const getUsersStart = () => ({
   type: USERS_GET_START,
})

const getUsersSuccess = (): { type: string } => ({
   type: USERS_GET_SUCCESS,
})

const getUsersFailure = (): { type: string } => ({
   type: USERS_GET_FAILURE,
})

export { getUsersStart, getUsersSuccess, getUsersFailure }
