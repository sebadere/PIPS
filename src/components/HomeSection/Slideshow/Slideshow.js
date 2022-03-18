import React, {useRef, useEffect} from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { MainContainer, Slide, SlideText, SlideShowContainer, Controls, Button, Text} from './SlideshowElements';

const Slideshow = () => {

    const slideshow = useRef(null);
    const intervalSlideshow = useRef(null);

    const next = () =>{
        if(slideshow.current.children.length > 0){
            
            const firstElement = slideshow.current.children[0];
            slideshow.current.style.transition = `300ms ease-out all`;
            
            const slideSize = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${slideSize}px)`
            
            const transition = () => {
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                slideshow.current.appendChild(firstElement);

                slideshow.current.removeEventListener('transitionend', transition)
            }
            slideshow.current.addEventListener('transitionend', transition);
        }
    }
    
    const previous = () =>{
        if(slideshow.current.children.length > 0){
            const slideShowLength = slideshow.current.children.length - 1;
            const lastElement = slideshow.current.children[slideShowLength];

            slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';

            const slideSize = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = '300ms ease-out all';
                slideshow.current.style.transform = `translateX(0)`
            }, 30);
        }
    }

    useEffect(() => {
        intervalSlideshow.current = setInterval(() => {
            next();
        },5000);

        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervalSlideshow.current);
        });

        slideshow.current.addEventListener('mouseleave', () => {
            intervalSlideshow.current = setInterval(() => {
                next();
            }, 5000);
        });
    }, []);

  
    
    return (
        <MainContainer id="home">
            <SlideShowContainer ref={slideshow}>
                <Slide>
                    <a>
                        <img src="https://blog.agendapro.com/hubfs/Barberia.png" alt=""/>
                    </a>
                    <SlideText backColor textColor textShadow>
                        <Text>Corte clásico o moderno</Text>
                    </SlideText>
                </Slide>
                <Slide>
                    <a>
                        <img src="https://www.americanexpress.com/de-de/amexcited/media/cache/default/cms/2021/12/Barber-Shop-Hannover-Mann-wird-rasiert-scaled.jpg" alt=""/>
                    </a>
                    <SlideText>
                        <Text>Afeitada tradicional o recorte de barba.</Text>
                    </SlideText>
                </Slide>
                <Slide>
                    <a>
                        <img src="https://st2.depositphotos.com/2931363/9695/i/950/depositphotos_96951996-stock-photo-young-handsome-man-in-barbershop.jpg" alt=""/>
                    </a>
                    <SlideText backColor textColor textShadow>
                        <Text>Color, decoloracion, alisado, entre otros</Text>
                    </SlideText>
                </Slide>
            </SlideShowContainer>
            <Controls>
                <Button onClick={previous}>
                    <MdKeyboardArrowLeft/>
                </Button>
                <Button right onClick={next}>
                    <MdKeyboardArrowRight/>
                </Button>
            </Controls>
        </MainContainer>
    
    );
}

export default Slideshow;