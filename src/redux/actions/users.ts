import { USERS_GET_START, USERS_GET_SUCCESS, USERS_GET_FAILURE } from '@redux/actionsTypes'

const getUsersStart = (page: number) => ({
   type: USERS_GET_START,
   page,
})

const getUsersSuccess = (): { type: string } => ({
   type: USERS_GET_SUCCESS,
})

const getUsersFailure = (): { type: string } => ({
   type: USERS_GET_FAILURE,
})

export { getUsersStart, getUsersSuccess, getUsersFailure }
