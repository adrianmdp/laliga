import React, { FC } from 'react'

import { Wrapper } from '@styles'

interface Props {
   className?: string
}

const Layout: FC<Props> = ({ children, className }) => {
   return <Wrapper className={className}>{children}</Wrapper>
}

export { Layout }
