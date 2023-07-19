import { useState } from "react";
import PropTypes from 'prop-types';


const Card = ({movie}) => {
    
    const {title, meta_name, img} = movie;

    const [hoveredCard, setHoveredCard] = useState(null);

    const handleCardHover = (cardName) => {
        setHoveredCard(cardName);
    };

  return (
    <div className='col-6 col-md-4 col-lg-3 mt-4'
    onMouseEnter={() => handleCardHover(meta_name)}
    onMouseLeave={() => handleCardHover(null)}
>
  <div className='img_container position-relative'>
        <img 
            src={`/assets/thumbnails/${img}`}
            alt='bohemian rhapsody' 
            className={`img_tab ${hoveredCard === meta_name ? 'img_tab_hovered' : ''}`} 
        />

      <div className={`card_hover ${hoveredCard === meta_name ? 'card_hover_visible' : ''}`}>
        <div className='card_hover_content d-flex justify-content-center align-items-center flex-column'>
            <h3 className='card_hover_title text-center'> {title} </h3>
            <button className='button_thumb'> Watch Now </button>
            <button className='button_thumb button_thumb_more'> More Info </button>
        </div>
    </div>
  </div>
</div>
  )
}

export default Card

Card.propTypes = {
    movie: PropTypes.object.isRequired
}