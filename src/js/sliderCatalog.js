import React from 'react';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import '../css/sliderCatalog.css'


function SliderCatalog () {
  return (
    <Swiper
        className='sliderCatalog'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={5}
        navigation
        pagination={{ clickable: true }}
        autoplay={{active: true}}
        loop={true}
        loopedSlides={null}
        loopedSlidesLimit={false}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='sliderCatalog__slide'>
        <img src={require('../img/ATV-500YS-LEOPARD-yellow 1.png')} alt='img'/>
        <div className='sliderCatalog__slide__name'>Stels-ATV-500YS-Леопард-ST</div>
      </SwiperSlide>
      <SwiperSlide className='sliderCatalog__slide'>
        <img src={require('../img/ATV-650-GUEPARD-ST 1.png')} alt='img'/>
        <div className='sliderCatalog__slide__name'>Stels-ATV-650-Гепард-ST</div>
      </SwiperSlide>
      <SwiperSlide className='sliderCatalog__slide'>
        <img src={require('../img/ATV-650YS-EFI-leopard 1.png')} alt='img'/>
        <div className='sliderCatalog__slide__name'>Stels-ATV-650YS-EFI-Леопард</div>
      </SwiperSlide>
      <SwiperSlide className='sliderCatalog__slide'>
        <img src={require('../img/ATV-500YS-LEOPARD-yellow 1.png')} alt='img'/>
        <div className='sliderCatalog__slide__name'>4</div>
      </SwiperSlide>
      <SwiperSlide className='sliderCatalog__slide'>
        <img src={require('../img/ATV-650-GUEPARD-ST 1.png')} alt='img'/>
        <div className='sliderCatalog__slide__name'>5</div>
      </SwiperSlide>
      <SwiperSlide className='sliderCatalog__slide'>
        <img src={require('../img/ATV-650YS-EFI-leopard 1.png')} alt='img'/>
        <div className='sliderCatalog__slide__name'>6</div>
      </SwiperSlide>
      <SwiperSlide className='sliderCatalog__slide'>
        <img src={require('../img/ATV-500YS-LEOPARD-yellow 1.png')} alt='img'/>
        <div className='sliderCatalog__slide__name'>7</div>
      </SwiperSlide>
      <SwiperSlide className='sliderCatalog__slide'>
        <img src={require('../img/ATV-650-GUEPARD-ST 1.png')} alt='img'/>
        <div className='sliderCatalog__slide__name'>8</div>
      </SwiperSlide>
      <SwiperSlide className='sliderCatalog__slide'>
        <img src={require('../img/ATV-650YS-EFI-leopard 1.png')} alt='img'/>
        <div className='sliderCatalog__slide__name'>9</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderCatalog;