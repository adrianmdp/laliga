import styled from 'styled-components'

import { theme } from './theme'
import { IButton, IUl, IModal } from './types'

const Wrapper = styled.div`
   background: #51238a;
   background: ${'-moz-linear-gradient(45deg, #51238a 0%, #652cd4 100%)'};
   background: ${'-webkit-linear-gradient(45deg, #51238a 0%, #652cd4 100%)'};
   background: ${' linear-gradient(45deg, #51238a 0%, #652cd4 100%)'};
   filter: ${`progid:DXImageTransform.Microsoft.gradient( startColorstr=' #51238a ', endColorstr='
      #652cd4 ',GradientType=1 )`};
   min-height: 100vh;
`

const Main = styled.main`
   padding-top: 20px;
   padding-bottom: 20px;
`

const Container = styled.div`
   width: 50vw;
   max-width: 1400px;
   margin: auto;
   @media (max-width: 1200px) {
      width: 70vw;
   }
   @media (max-width: 992px) {
      width: 90vw;
   }
`

const Nav = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: #fff;
   padding: 20px 20px;
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
   cursor: pointer;
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
   @media (max-width: 667px) {
      min-width: 100%;
   }
`

const FormWrapper = styled.div`
   border-radius: ${theme.borderRadius}px;
`

const List = styled.ul<IUl>`
   list-style: none;
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: ${props => props.direction};
`

const ListItem = styled.li`
   margin-bottom: 20px;
   @media (max-width: 992px) {
      margin-bottom: 50px;
   }
`

const Modal = styled.div<IModal>`
   background-color: rgba(0, 0, 0, 0.8);
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   z-index: 9999;
   display: flex;
   align-items: center;
   justify-content: center;
   -webkit-transition: all 300ms ease;
   -moz-transition: all 300ms ease;
   -ms-transition: all 300ms ease;
   -o-transition: all 300ms ease;
   transition: all 300ms ease;
   opacity: ${props => (props.isOpen ? 1 : 0)};
   z-index: ${props => (props.isOpen ? 9999 : -1)};
`
const ModalContent = styled.div`
   background-color: #fff;
   min-width: 500px;
   min-height: 200px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 20px;
   @media (max-width: 667px) {
      max-width: 90vw;
      min-width: unset;
   }
`

const Paginator = styled.ul`
   display: flex;
   flex-direction: column;
   justify-content: center;
   list-style: none;
   margin: 0;
   padding: 0;
   position: absolute;
   top: 50%;
   right: 100px;
   @media (max-width: 992px) {
      position: fixed;
      top: unset;
      right: 30px;
      bottom: 30px;
   }
`

const PaginatorItem = styled.li`
   margin: 10px;
`

const PaginatorButtom = styled.button<IButton>`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   border: 0;
   background-color: ${props => (props.isActive ? theme.colors.primary : theme.colors.secondary)};
   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
   color: #fff;
   cursor: pointer;
   @media (max-width: 992px) {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
   }
`

export {
   Container,
   Wrapper,
   Nav,
   Main,
   Button,
   FormWrapper,
   Input,
   List,
   ListItem,
   Modal,
   ModalContent,
   Paginator,
   PaginatorItem,
   PaginatorButtom,
}
