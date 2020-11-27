// key in rafce
import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavItem, 
    MobileIcon, NavLogo, NavMenu, NavLinks, 
    NavBtn, NavBtnLink} from './NavbarElement';

const Navbar = () => {
    return (
        <div>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Portfolio</NavLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup'>Sign up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </div>
    )
}

export default Navbar;
