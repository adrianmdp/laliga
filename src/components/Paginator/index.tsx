import React, { FC } from 'react'

import { Paginator as SPaginator } from '@styles'

interface Props {
   totalPages: number
   onPageChange: (num: number) => void
}

const Paginator: FC<Props> = ({ totalPages, onPageChange }) => {
   return (
      <SPaginator>
         {Array.from(Array<number[]>(totalPages).keys()).map(num => (
            <button type="button" onClick={() => onPageChange(num + 1)}>
               {num + 1}
            </button>
         ))}
      </SPaginator>
   )
}

export { Paginator }
