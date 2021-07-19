import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { Layout, Paginator, ListItem, NavBar } from '@components'
import { Container, List, Main } from '@styles'
import { getUsersStart as getUsers } from '@redux/actions/users'
import { User, UsersResponse } from '@types'

const Users: FC = () => {
   const { push } = useHistory()

   const { page } = useParams<{ page: string }>()

   const dispatch = useDispatch()
   const { data: users, total_pages: totalPages } = useSelector(
      (state: { users: UsersResponse & { loading: boolean } }) => state.users,
   )

   useEffect(() => {
      try {
         dispatch(getUsers(Number(page) || 1))
      } catch (err) {
         console.log(err)
      }
   }, [page, dispatch])

   return (
      <Layout className="users">
         <NavBar />
         <Main>
            <Container>
               <List direction="column">
                  {users?.map((user: User) => (
                     <ListItem key={user.id} user={user} />
                  ))}
               </List>

               <Paginator
                  totalPages={totalPages}
                  onPageChange={(newPage: number) => push(`/users/${newPage}`)}
               />
            </Container>
         </Main>
      </Layout>
   )
}

export { Users }
