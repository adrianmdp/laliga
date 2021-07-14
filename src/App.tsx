import React, { FC } from 'react'
import { Provider } from 'react-redux'

import { store } from '@redux'

const App: FC = () => {
   return (
      <Provider store={store}>
         <div className="app">App</div>
      </Provider>
   )
}

export default App
