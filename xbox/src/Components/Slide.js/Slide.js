import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../Slide.js/Slide.css'


const Slideshow = () => {
  const images = [
    {
      url: 'https://canoticias.pt/wp-content/uploads/2021/07/kylian-mbappe-sera-a-estrela-da-capa-do-fifa-22-kylian-mbappe-sera-a-estrela-da-capa-do-fifa-22.jpg',
      
    },
    {
      url: 'https://gamingbolt.com/wp-content/uploads/2021/08/forza-horizon-5-cover-image.jpg',
      
    },
    {
      url: 'https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Landscape_2560x1440-2560x1440-827a9d1823ad230a0ea5a2efc7936370.jpg',
      
    },
  ];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
    
  }
  return (
    <div className='slide'>
      <Zoom className='slide_zoon' {...zoomOutProperties}>
        { images.map((each, index) => (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img key={index} className='img__slide' src={each.url} />
        ))}
      </Zoom>
    </div>
  )
}
export default Slideshow


