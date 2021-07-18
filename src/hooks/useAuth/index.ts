import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { KEYS } from '@constants'
import { authStart } from '@redux/actions/auth'
import { LoginForm, AuthResponse } from '@types'

import { useLocalStorage } from '../useLocalStorage'

const useAuth = (): AuthResponse => {
   const dispatch = useDispatch()
   const [, setValue] = useLocalStorage<string>(KEYS.STORAGE.SESSION_TOKEN)
   const auth = useSelector((state: { auth: { loading: string; token: string } }) => state.auth)

   useEffect(() => {
      if (auth.token !== '') setValue(auth.token)
   }, [auth.token, setValue])

   const login = (formData: LoginForm): boolean => {
      try {
         dispatch(authStart(formData))
      } catch (err) {
         throw err.response.data.error
      }
      return true
   }

   return { login }
}

export { useAuth }
