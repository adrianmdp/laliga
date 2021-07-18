import { UsersResponse } from '@types'

import { USERS_GET_START, USERS_GET_SUCCESS, USERS_GET_FAILURE } from '../../actionsTypes'

type Action = {
   type: string
   payload: UsersResponse
}

type State = {
   loading: boolean
   error?: {
      message: string
   }
}

const initialState: State = {
   loading: false,
}

const users = (state: State = initialState, action: Action): State => {
   switch (action.type) {
      case USERS_GET_START:
         return {
            loading: true,
         }

      case USERS_GET_SUCCESS:
         return {
            loading: false,
            ...action.payload,
         }

      case USERS_GET_FAILURE:
         return {
            loading: false,
         }

      default:
         return state
   }
}

export { users }
