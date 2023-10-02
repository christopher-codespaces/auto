import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// Import your images
import brakes from './assets/brakes.jpeg';
import carkey from './assets/carkey.jpeg';
// Add other image imports...

const images = [
  { id: 1, src: brakes, caption: 'Caption 1' },
  { id: 2, src: carkey, caption: 'Caption 2' },
  // Add other images...
];

function Slider() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-8">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative">
              <img
                src={image.src}
                alt={`slide_image_${image.id}`}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black p-4 text-white opacity-75">
                {image.caption}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
