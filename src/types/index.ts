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

export type User = {
   id: number
   email: string
   first_name: string
   last_name: string
   avatar: string
}

export type UsersResponse = {
   page: number
   per_page: number
   total: number
   total_pages: number
   data: User[]
   support: {
      url: string
      text: string
   }
}
