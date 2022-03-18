import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background: black;
    height: 80px;
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:30;

    /* @media screen and (max-width:960px){
        transition: 0.8s all ease;
    } */
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1300px;
`

export const NavIcon = styled.div`
    height: 80%;
    margin-top: 5px;
    font-size: 3.5rem;
    margin-right: 5%;
    color: #8f8146;

    @media screen and (max-width:400px){
        font-size: 2.5rem;
        margin-top: 12%;
    }

    @media screen and (max-width:350px){
        font-size: 2rem;
        margin-top: 20%;
    }
`

export const Title = styled.h1`
    font-size: 34px;
    font-family: 'Inconsolata';
    color: #8f8146;
`

export const Subtitle = styled.h1`
    font-size: 25px;
    font-family: 'Inconsolata';
    margin-left: 2%;
    color: black;

    text-shadow: -1px 1px 0 #8f8146,
                        1px 1px 0 #8f8146,
                        1px -1px 0 #8f8146,
                        -1px -1px 0 #8f8146;
`

export const NavLogo = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width:768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #8f8146;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width:768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #8f8146;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Inconsolata';
    font-size: 24px;
    font-weight: bold;


    &.active{
        border-bottom: 3px solid #8f8146;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-left:15px;

    @media screen and(max-width:768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkS)`
    white-space: nowrap;
    padding: 10px 22px;
    font-family: 'Inconsolata';
    font-size: 24px;
    font-weight: bold;
    outline: none;
    border:none;
    border: 2px solid #8f8146;
    border-left: none;
    border-right: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: #8f8146;
    border-left: ${({ specialScroll }) => (specialScroll ? '2px solid #8f8146' : 'none')};
    border-right: ${({ specialScroll }) => (specialScroll ? '2px solid #8f8146' : 'none')};
    

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #8f8146;
        color: black;
    }
`