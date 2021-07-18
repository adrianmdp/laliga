import React, { FC } from 'react'

import { ListItem as SListItem } from '@styles'
import { User } from '@types'

import './styles.scss'

interface Props {
   user: User
}

const ListItem: FC<Props> = ({ user }) => {
   const { id, first_name: firsName, last_name: lastName, email, avatar } = user
   return (
      <SListItem className="list-item">
         <div className="id">{id}</div>
         <div className="avatar">
            <img src={avatar} alt={lastName} />
         </div>
         <div className="name">
            {lastName}, {firsName}
         </div>
         <div className="email">{email}</div>
      </SListItem>
   )
}

export { ListItem }
