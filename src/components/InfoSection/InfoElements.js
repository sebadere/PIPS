import styled from "styled-components";


export const InfoContainer = styled.div`
    background: #f9f9f9;
    display: flex;
    justify-content: center;
    padding: 0 24px;
    position: relative;
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (max-width:700px){
        display: flex;
        flex-direction: column;
    }
`

export const InfoWrapper = styled.div`
    justify-content: center;
    width: 50%;

    @media screen and (max-width:700px){
        width: 100%;
    }
`

export const InfoTitle = styled.h1`
    font-family: 'Inconsolata';
    font-size: 49px;
    color: #8f8146;
    text-align: center;
    margin-top: 5%;

    @media screen and (max-width:900px){
        font-size: 32px;
    }
`
export const InfoSubtitle = styled.p`
    font-family: 'Inconsolata';
    font-size: 19px;
    color: black;
    margin-top: 3%;
    margin-bottom: 3%;
    

    @media screen and (max-width:900px){
        font-size: 16px;
    }
`

export const InfoSubSubtitle = styled.p`
    text-align: center;
    font-weight: bold;
    margin-bottom: 5%;
    font-family: 'Inconsolata';
`

export const InfoPeople = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 6%;
`

export const InfoPeopleTitle = styled.h2`
    font-family: 'Hubballi', cursive;
    font-size: 30px;
    color: #8f8146;
    margin-right: 10%;

    @media screen and (max-width:900px){
        font-size: 22px;
    }
`

export const People =  styled.p`
    font-family: 'Hubballi', cursive;
    font-size: 19px;
    color: black;
    margin-top: 5px;
    font-weight: lighter;

    @media screen and (max-width:900px){
        font-size: 12px;
    }
`

export const ImageWrapper = styled.div`    
    
`

export const Image = styled.img`
    height: 80%;
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

    -webkit-transform:rotate(-0.3deg);
    -moz-transform: rotate(-0.3deg);
    -ms-transform: rotate(-0.3deg);
    -o-transform: rotate(-0.3deg);

    transform:${props => props.opposite ? 'rotate(179.7deg);' : 'rotate(-0.3deg);' };

`