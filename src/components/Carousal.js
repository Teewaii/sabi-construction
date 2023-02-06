import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <div className="slide-one">
        
    </div>

];

const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

function Carousal() {
  return (
    <div>
        Hello
    </div>
  )
}

export default Carousal