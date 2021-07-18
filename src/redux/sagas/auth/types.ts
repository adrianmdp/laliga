import { AxiosResponse } from 'axios'

import { PutEffect } from '@redux-saga/core/effects'

import { LoginResponse } from '@types'

export type GenLoginResponse = Generator<
   | Promise<AxiosResponse<LoginResponse>>
   | PutEffect<{
        type: string
        payload: string
     }>,
   void,
   LoginResponse
>
