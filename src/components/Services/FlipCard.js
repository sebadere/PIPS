import { useState } from "react";
import cn from "classnames";
import {CardFrontText ,CardBackText, CardImage, Image, BackIcon} from './ServicesElements'
import {GiBarbedSun} from "react-icons/gi"

function FlipCard({ card, imageSource}) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  function handleFocus() { 
    if (card.variant === "focus") { 
      setShowBack(true); 
    } 
  } 

  function handleBlur() { 
    if (card.variant === "focus") { 
      setShowBack(false); 
    } 
  } 

  return (
    <div
      tabIndex={card.id} 
      className={cn("flip-card-outer", { 
        "focus-trigger": card.variant === "focus" 
      })} 
      onClick={handleClick}
      onFocus={handleFocus} 
      onBlur={handleBlur} 
    >
      <div className={cn("flip-card-inner", {
          showBack,
          "hover-trigger": card.variant === "hover"
        })}
      >
        <div className="card front">
          <div className="card-body">
            <CardImage>
                <Image src={imageSource} alt=""></Image>
            </CardImage>
            <CardFrontText>
                {card.front}
            </CardFrontText>
          </div>
        </div>
        <div className="card back">
          {/* <div className="card-body d-flex justify-content-center align-items-center"> */}
            <CardBackText>
                {card.back}
            </CardBackText>
            <BackIcon>
                <GiBarbedSun/>
            </BackIcon>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;