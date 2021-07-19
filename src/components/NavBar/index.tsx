import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Button, List, Modal, ModalContent, Nav } from '@styles'
import { useAuth } from '@hooks'
import Logo from '@assets/images/logo.png'

import './styles.scss'

const NavBar: FC = () => {
   const [isModalOpen, setIsModalOpen] = useState(false)

   const { logout } = useAuth()
   const { push } = useHistory()

   return (
      <Nav className="nav-bar">
         <img src={Logo} alt="Logo La Liga" className="logo" width="120" />
         <List direction="row">
            <li>
               <a
                  href="https://www.linkedin.com/in/j-adrian-solimano-96807710/"
                  target="_blank"
                  rel="noreferrer"
               >
                  Acerca de mi
               </a>
            </li>
            <li>
               <Button styled="primary" onClick={() => setIsModalOpen(true)}>
                  Cerrar sesión
               </Button>
            </li>
         </List>

         <Modal isOpen={isModalOpen}>
            <ModalContent>
               <p>¿Seguro que deseas cerrar sesión?</p>
               <div>
                  <Button styled="light" onClick={() => setIsModalOpen(false)}>
                     Cancelar
                  </Button>
                  <Button
                     styled="primary"
                     onClick={() => {
                        logout()
                        push('/login')
                     }}
                  >
                     Si, cerrar sesión
                  </Button>
               </div>
            </ModalContent>
         </Modal>
      </Nav>
   )
}

export { NavBar }
