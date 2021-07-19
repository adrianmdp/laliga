import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { UsersResponse } from '@types'
import { Paginator as SPaginator, PaginatorButtom, PaginatorItem } from '@styles'

interface Props {
   totalPages: number
   onPageChange: (num: number) => void
}

const Paginator: FC<Props> = ({ totalPages, onPageChange }) => {
   const { page } = useSelector(
      (state: { users: UsersResponse & { loading: boolean } }) => state.users,
   )

   return (
      <SPaginator>
         {Array.from(Array<number[]>(totalPages).keys()).map(num => (
            <PaginatorItem key={num}>
               <PaginatorButtom
                  type="button"
                  isActive={num + 1 === page}
                  onClick={() => onPageChange(num + 1)}
               >
                  {num + 1}
               </PaginatorButtom>
            </PaginatorItem>
         ))}
      </SPaginator>
   )
}

export { Paginator }
