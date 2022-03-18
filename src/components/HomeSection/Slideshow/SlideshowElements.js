import styled from 'styled-components';

export const MainContainer = styled.div`
    overflow:hidden;
    position: relative;
`

export const Slide = styled.div`
    min-width: 100%;
    overflow:hidden;
    transition: .3s ease all;
    z-index: 5;
    max-height: 900px;
    position: relative;

    img{
        width: 100%;
        vertical-align: top;
        height: clamp(300px, 100vw, 700px);
        object-fit: cover;
    }
`

export const SlideText = styled.div`
    background: ${props => props.backColor ? 'rgba(0, 0, 0,.4)' : 'rgba(143, 129, 70,.4)' };
    color: ${props => props.textColor ? '#8f8146' : 'black' };
    text-shadow:${props => props.textShadow ? '1px 3px 2px black;' : '1px 3px 2px #8f8146;' };
    width: 100%;
    padding: 20px 50px;
    text-align: center;
    position: absolute;
    bottom: 0;
    font-size:35px;

    @media screen and (max-width:600px){
        position:relative;
        background:black;
        font-size:18px;
        color: #8f8146;
        text-shadow:${props => props.textShadow ? 'none;' : '1px 3px 2px black;' };
    }

    @media screen and (max-width:375px){
        font-size:12px;
    }
`

export const Text = styled.p`
    font-family: 'Inconsolata';
`

export const SlideShowContainer = styled.div`
    display:flex;
    flex-wrap: nowrap;
`

export const Controls = styled.div`
    position: absolute;
    top: 25%;
    z-index: 20;
    width:100%;
    height:100%;
    pointer-events:none;
`

export const Button = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 50%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    font-size: 6rem;

    path {
        filter: ${props => props.right ? 'drop-shadow(-2px 0px 0px #8f8146)' : 'drop-shadow(2px 0px 0px #8f8146)' }
    }

    ${props => props.right ? 'right: 30px' : 'left: 0' }
`