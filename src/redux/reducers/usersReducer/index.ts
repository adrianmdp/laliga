import { User } from '@types'

import { USERS_GET_START, USERS_GET_SUCCESS, USERS_GET_FAILURE } from '../../actionsTypes'

type Action = {
   type: string
   payload: User[]
}

type State = {
   loading: boolean
   users: User[]
   error?: {
      message: string
   }
}

const initialState: State = {
   loading: false,
   users: [],
}

const users = (state: State = initialState, action: Action): State => {
   switch (action.type) {
      case USERS_GET_START:
         return {
            loading: true,
            users: [],
         }

      case USERS_GET_SUCCESS:
         return {
            loading: false,
            users: action.payload,
         }

      case USERS_GET_FAILURE:
         return {
            loading: false,
            users: [],
         }

      default:
         return state
   }
}

export { users }
