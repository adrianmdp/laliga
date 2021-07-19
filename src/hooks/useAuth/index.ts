import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { KEYS } from '@constants'
import { authStart, authOffStart } from '@redux/actions/auth'
import { LoginForm, AuthResponse } from '@types'

import { useLocalStorage } from '../useLocalStorage'

const useAuth = (): AuthResponse => {
   const dispatch = useDispatch()

   const [storedValue, setValue, clear] = useLocalStorage<string>(KEYS.STORAGE.SESSION_TOKEN)
   const auth = useSelector((state: { auth: { loading: string; token: string } }) => state.auth)

   const [isUserLogged, setIsUserLogged] = useState(storedValue !== undefined && storedValue !== '')

   useEffect(() => {
      console.log('auth.token', auth.token)
      if (auth.token !== '') setValue(auth.token)
   }, [auth.token])

   const login = (formData: LoginForm) => {
      try {
         dispatch(authStart(formData))
      } catch (err) {
         throw err.response.data.error
      }
      return true
   }

   const logout = async () => {
      console.log('logout')
      clear()
      setValue('')
      setIsUserLogged(false)
      dispatch(authOffStart())
   }

   return { login, logout, isUserLogged }
}

export { useAuth }
