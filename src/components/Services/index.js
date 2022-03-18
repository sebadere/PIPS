import React, {useEffect} from 'react'
import { ServicesContainer, ServicesWrapper, ServiceTitle} from './ServicesElements'
import Aos from 'aos';
import Image1 from '../../images/corte.png'
import Image2 from '../../images/barba.png'
import Image3 from '../../images/alisado.png'
import Image4 from '../../images/color.png'
import Image5 from '../../images/decoloracion.png'
import Image6 from '../../images/niños.png'
import "./styles.scss";
import FlipCard from './FlipCard';

const cards = [
    {
      id: "2",
      variant: "hover",
      front: "CORTE",
      back: "Clásico o moderno. Marcamos tendencia combinando máquinas y tijeras.",
      image: Image1,
    },
    {
      id: "2",
      variant: "hover",
      front: "BARBA",
      back: "Afeitada tradicional o recorte de barba. Contamos con el servicio de toalla caliente.",
      image: Image2
    },
    {
      id: "3",
      variant: "hover",
      front: "ALISADO",
      back: "A veces es necesario. Date una vuelta y lo evaluamos.",
      image: Image3
    },
    {
      id: "4",
      variant: "hover",
      front: "COLOR",
      back: "Las tendencias y los tonos cambian.Animate vos también.",
      image: Image4
    },
    {
      id: "5",
      variant: "hover",
      front: "DECOLORACIÓN",
      back: "Encontrar el tono justo para tu estilo es nuestro objetivo.",
      image: Image5
    },
    {
      id: "6",
      variant: "hover",
      front: "NIÑOS",
      back: "El mini BACAN sabe lo que quiere, por eso atendemos sus antojos.",
      image: Image6
    },
    
  ];


const ServicesSection = () => {
      return (

        <ServicesContainer id='services'>
        <ServiceTitle>Nuestros servicios</ServiceTitle>
        <ServicesWrapper>
            {cards.map((card) => (
                <FlipCard key={card.id} card={card} imageSource={card.image}/>
            ))}
        </ServicesWrapper>
        </ServicesContainer>
        
      );
}

export default ServicesSection
