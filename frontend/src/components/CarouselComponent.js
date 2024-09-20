import Carousel from 'react-bootstrap/Carousel';
import green from '../Images/green.jpg';
import fort from '../Images/fort.jpg';
import mountain from '../Images/mountain.jpg';

import '../CSS/Carousel.css';


export default function CarouselComponent() {
  return (
   
    <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100 c-Carouselimg"
          src={green}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-Carouselimg"
          src={fort}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-Carouselimg"
          src={mountain}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    
  );
}

