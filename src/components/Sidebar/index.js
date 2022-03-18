import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarLink, SidebarRoute, SidebarWrapper, SidebarMenu} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to='about' smooth={true} duration={500} spy={true} exact={true} offset={-80} onClick={toggle}>
                        Sobre Nosotros
                    </SidebarLink>
                    <SidebarLink to='services' smooth={true} duration={500} spy={true} exact={true} offset={-68}  onClick={toggle}>
                        Servicios
                    </SidebarLink>
                    <SideBtnWrap>
                        <SidebarRoute to='contact' onClick={toggle}>Contacto</SidebarRoute>
                    </SideBtnWrap>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
