import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { FormWrapper, Button, Input } from '@styles'
import { LoginForm } from '@types'
import { Layout } from '@components'
import { useAuth } from '@hooks'
import Logo from '@assets/images/logo.png'

import './styles.scss'

const validationSchema = yup.object().shape({
   email: yup.string().email().required(),
   password: yup.string().required(),
})
const defaultValues = { email: 'eve.holt@reqres.in', password: 'cityslicka' }

const Login: FC = () => {
   const { push } = useHistory()

   const {
      handleSubmit,
      control,
      formState: { errors },
   } = useForm<LoginForm>({
      defaultValues,
      resolver: yupResolver(validationSchema),
   })

   const { login } = useAuth()

   const onSubmit: SubmitHandler<LoginForm> = data => {
      if (login(data)) push('/users')
   }

   return (
      <Layout className="login">
         <FormWrapper className="form-wrapper">
            <img src={Logo} alt="Logo La Liga" className="logo" />
            <form onSubmit={handleSubmit(onSubmit)} className="form">
               <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <Input type="email" {...field} />}
               />
               {errors.email && errors.email.message}
               <Controller
                  name="password"
                  control={control}
                  render={({ field }) => <Input type="password" {...field} autoComplete="on" />}
               />
               {errors.email && errors.email.message}

               <Button type="submit" styled="primary">
                  Iniciar sesión
               </Button>
            </form>
         </FormWrapper>
      </Layout>
   )
}

export { Login }
