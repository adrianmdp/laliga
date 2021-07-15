import { LoginForm } from '@types'
import { api } from '@utils'

const useAuth = () => {
   const login = async (formData: LoginForm) => {
      try {
         const response = await api.post('/login', formData)
         return response.data
      } catch (err) {
         throw err.response.data.error
      }
   }

   return { login }
}

export { useAuth }
