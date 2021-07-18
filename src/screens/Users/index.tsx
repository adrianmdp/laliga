import React, { FC } from 'react'
// import { useDispatch } from 'react-redux'

import { Layout } from '@components'
import { List, ListItem } from '@styles'

const Users: FC = () => {
   // const dispatch = useDispatch()

   // useEffect(() => {
   //    // dispatch()
   // }, [])

   return (
      <Layout className="login">
         <List>
            <ListItem>Hola</ListItem>
         </List>
      </Layout>
   )
}

export { Users }
