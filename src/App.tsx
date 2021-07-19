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
      // eslint-disable-next-line
   }, [isUserLogged, push])

   return (
      <Switch>
         <Route path="/users/:page" component={Users} />
         <Route path="/" component={Login} />
      </Switch>
   )
}

export default App
