import styled from "styled-components";


export const ServicesContainer = styled.div`
    margin: auto;
    width: 70%;
`

export const ServicesWrapper = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto auto;

    @media screen and (max-width: 1500px){
        grid-template-columns: repeat(auto-fit,minmax(18rem,20rem));
    }   
`

export const ServiceTitle = styled.h1`
    font-family: 'Inconsolata';
    font-size: 49px;
    color: #8f8146;
    text-align: center;
    margin-bottom: 5%;
    padding-top:50px;

    @media screen and (max-width:900px){
        font-size: 32px;
}
`

export const CardFrontText = styled.p`
    text-align: center;
    vertical-align:middle;
    margin-top:10px;
    font-size: 25px;
    font-family: 'Inconsolata';
    font-weight: bold;
    text-shadow: 1px 3px 2px #a69651;
`

export const CardBackText = styled.p`
    vertical-align:middle;
    margin:30px;
    font-size: 25px;
    font-family: 'Inconsolata';
    font-weight: bold;
    height: 50%;
    text-shadow: 1px 3px 2px #3d3309;
`

export const CardImage = styled.div`
    height: 250px;
    width: 300px;
`
export const Image = styled.img`
    height: 250px;
    width: 300px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`
export const BackIcon = styled.div`
    font-size: 4rem;
    text-align: center;
`
