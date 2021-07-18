import { UsersResponse } from '@types'
import { AxiosResponse } from 'axios'
import { PutEffect } from 'redux-saga/effects'

export type GenUsersResponse = Generator<
   | Promise<
        AxiosResponse<{
           data: UsersResponse
        }>
     >
   | PutEffect<{
        type: string
        payload: UsersResponse
     }>,
   void,
   {
      data: UsersResponse
   }
>
