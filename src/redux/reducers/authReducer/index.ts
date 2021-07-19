import {
   USER_AUTH_START,
   USER_AUTH_SUCCESS,
   USER_AUTH_FAILURE,
   USER_AUTH_OFF_START,
} from '../../actionsTypes'

type Action = {
   type: string
   payload: string
}

type State = {
   loading: boolean
   token: string
   error?: {
      message: string
   }
}

const initialState: State = {
   loading: false,
   token: '',
}

const auth = (state: State = initialState, action: Action): State => {
   switch (action.type) {
      case USER_AUTH_START:
         return {
            loading: true,
            token: '',
         }

      case USER_AUTH_SUCCESS:
         return {
            loading: false,
            token: action.payload,
         }

      case USER_AUTH_FAILURE:
         return {
            loading: false,
            token: '',
         }

      case USER_AUTH_OFF_START:
         return {
            loading: false,
            token: '',
         }

      default:
         return state
   }
}

export { auth }
