import React, { FC, useEffect } from 'react'
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'

import { useAuth } from '@hooks'

import { Login, Users } from './screens'

const App: FC = () => {
   const { isUserLogged } = useAuth()
   const { pathname } = useLocation()
   const { push } = useHistory()

   useEffect(() => {
      if (isUserLogged) {
         if (pathname === '/login') push('/users/1')
      } else {
         push('/login')
      }
   }, [isUserLogged, push])

   return (
      <Switch>
         <Route path="/login" component={Login} />
         <Route path="/users/:page" component={Users} />
      </Switch>
   )
}

export default App
