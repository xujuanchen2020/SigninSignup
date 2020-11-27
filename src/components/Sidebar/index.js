import React from 'react'
import {SidebarContainer, Icon, CloseIcon,
SideBtnWrap, SidebarLink, SidebarRoute,
SidebarWrapper, SidebarMenu} from './SidebarElement'

const Sidebar = () => {
    return (
        <div>
            <SidebarContainer>
                <Icon>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about">
                            About
                        </SidebarLink>
                        <SidebarLink to="discover">
                            Discover
                        </SidebarLink>
                        <SidebarLink to="services">
                            Services
                        </SidebarLink>
                        <SidebarLink to="signup">
                            Sign Up
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar
