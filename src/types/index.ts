export type LoginForm = {
   email: string
   password: string
}

export type LoginResponse = {
   data: {
      token: string
   }
}

export type AuthResponse = {
   login: (formData: LoginForm) => boolean
}
