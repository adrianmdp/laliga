import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { store } from './redux'
import { Login, Users } from './screens'

const App: FC = () => {
   return (
      <Provider store={store}>
         <Router>
            <Switch>
               <Route path="/login" component={Login} />
               <Route path="/users" component={Users} />
            </Switch>
         </Router>
      </Provider>
   )
}

export default App
