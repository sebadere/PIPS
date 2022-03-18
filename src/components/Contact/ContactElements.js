import styled from "styled-components";


export const ContactContainer = styled.div`
    margin-bottom:3%;
`

export const ContactTitle = styled.h1`
    font-family: 'Inconsolata';
    font-size: 49px;
    margin-top: 10%;
    margin-bottom: 5%;
    text-align: center;
    color: #8f8146;

    @media screen and (max-width:900px){
        font-size: 32px;
    }
`

export const ContactWrapper = styled.div`
    display:flex;
    margin-left: auto;
    width: 90%;

    @media screen and (max-width:1150px){
        display:flex;
        flex-direction: column;
    }
`

export const ImageWrapper = styled.div`
    width: 50%;
    margin-right: 3%;
    border: 5px solid black;

    @media screen and (max-width:1150px){
        width: 90%;
        margin-right: 0px;
    }
`

export const Image = styled.img`
    width:100%;
`
export const ContactInfoWrapper = styled.div`
    display:column;
    width: 50%;

    @media screen and (max-width:1150px){
        width: 90%;
        margin-right: 0px;
        margin-top: 20px;
    }

`
export const ContactInfo = styled.div`
    display:flex;
    padding: 10px 5px;
    background: black;
    color: gold;
    height: 100px;
    width: 70%;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
    border-radius: 50px;

    &:hover{
        background: #2e2e2e;
    }

    @media screen and (max-width:1150px){
        width: 50%;
        margin:auto;
        margin-bottom: 5%;
    }

    @media screen and (max-width:768px){
        width: 320px;
        margin:auto;
        margin-bottom: 5%;
    }

    @media screen and (max-width:400px){
        width: 280px;
        margin:auto;
        margin-bottom: 5%;
    }
`
export const IconWrapper = styled.div`
    font-size: 2rem;
    margin-left: 20px;
    margin-right: 20px;
    background: #8f8146;
    border-radius: 100px;
    padding:10px;
    color: black;
`

export const ContactInfoTitle = styled.p`
    font-family: 'Inconsolata';
    font-size: 1.5rem;
    color: #8f8146;
    font-weight: bold;

    @media screen and (max-width:768px){
        font-size: 1.2rem;
    }
`