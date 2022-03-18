import React, {useEffect} from 'react'
import { InfoContainer, InfoSubtitle, InfoPeople, InfoTitle, InfoWrapper, InfoPeopleTitle, People, ImageWrapper, Image, InfoSubSubtitle } from './InfoElements'
import Image1 from '../../images/scissorimage.png'
import 'aos/dist/aos.css';
import Aos from 'aos';

const InfoSection = () => {

    useEffect(() => {
        Aos.init({ duration: 1000});
      }, []);

    return (
        <>
            <InfoContainer id={'about'}>
                 <InfoWrapper>
                    <ImageWrapper>
                        <Image src={Image1} alt={'img'}></Image>
                    </ImageWrapper>
                    <InfoTitle>¿Que hacemos?</InfoTitle>
                    <InfoSubtitle>Desde 2015 nos dedicamos a mejorar la imagen de nuestros clientes. El objetivo es brindar el mejor servicio y marcar tendencia. Por eso construimos un espacio en el mundo para que disfrutes y te sientas cómodo. Queremos que BACAN sea tu lugar donde, más allá de cambiar tu look, puedas relajarte, disfrutar de una buena cerveza y encontrarte con amigos.</InfoSubtitle>
                    <InfoSubSubtitle>- Te esperamos -</InfoSubSubtitle>
                    <ImageWrapper>
                        <Image src={Image1} alt={'img'} opposite></Image>
                    </ImageWrapper>
                 </InfoWrapper>
            </InfoContainer>   
        </>
    )
}

export default InfoSection
