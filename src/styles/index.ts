import styled from 'styled-components'

import { theme } from './theme'
import { IButton } from './types'

const Wrapper = styled.div`
   background: #51238a;
   background: ${'-moz-linear-gradient(45deg, #51238a 0%, #652cd4 100%)'};
   background: ${'-webkit-linear-gradient(45deg, #51238a 0%, #652cd4 100%)'};
   background: ${' linear-gradient(45deg, #51238a 0%, #652cd4 100%)'};
   filter: ${`progid:DXImageTransform.Microsoft.gradient( startColorstr=' #51238a ', endColorstr='
      #652cd4 ',GradientType=1 )`};
   min-height: 100vh;
`

const Main = styled.main``

const Container = styled.div`
   width: 50vw;
   max-width: 1400px;
   margin: auto;
`

const Button = styled.button<IButton>`
   background-color: ${props => {
      switch (props.styled) {
         case 'primary':
            return theme.colors.primary
         case 'light':
            return theme.colors.light
         default:
            return theme.colors.light
      }
   }};
   color: ${props => {
      switch (props.styled) {
         case 'primary':
            return theme.colors.light
         case 'light':
            return theme.colors.primary
         default:
            return theme.colors.primary
      }
   }};
   text-align: center;
   height: ${theme.forms.controls.height}px;
   line-height: ${theme.forms.controls.height}px;
   padding: 0px 20px;
   border-radius: ${theme.borderRadius}px;
   border: 0;
`

const Input = styled.input`
   height: ${theme.forms.controls.height}px;
   min-width: 260px;
   line-height: ${theme.forms.controls.height}px;
   padding-left: 20px;
   padding-right: 20px;
   border-radius: ${theme.borderRadius}px;
   border: 0;
   margin-bottom: 30px;
`

const FormWrapper = styled.div`
   border-radius: ${theme.borderRadius}px;
`

const List = styled.ul`
   list-style: none;
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
`

const ListItem = styled.li`
   margin-bottom: 20px;
`

const Paginator = styled.ul``

export { Container, Wrapper, Main, Button, FormWrapper, Input, List, ListItem, Paginator }
