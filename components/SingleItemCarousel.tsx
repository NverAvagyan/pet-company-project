import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const SingleItemCarousel = () => {
  return (
    <div className="carouselWrapper">
      <Carousel
        showThumbs={true}
        infiniteLoop={true}
        emulateTouch
        showStatus={false}
        axis="horizontal"
      >
        <div className="bg-[#C4C4C4] h-[438px]">this is slide 1</div>
        <div className="bg-[#C4C4C4] h-[438px]">this is slide 2</div>
        <div className="bg-[#C4C4C4] h-[438px]">this is slide 3</div>
      </Carousel>
    </div>
  )
}

export default SingleItemCarousel
