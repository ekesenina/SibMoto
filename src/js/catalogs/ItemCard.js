import React from "react";
import ScrollToTop from "../..";
import { stockData } from "./goods";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Zoom from "react-img-hover-zoom";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'


const ItemCard = () => {
    ScrollToTop();

    const { id } = useParams();

    // Находим элемент массива stockData с соответствующим id
    const item = stockData.find((data) => data.id === Number(id));

    if (!item) {
        return <div>Товар не найден</div>;
    }

    return (
        <div className="main__item">
            <div className="main__item__card">
                <h2 className="main__item__card__name">{item.name}</h2>
                <div className="main__item__card__container">
                    <div className="main__item__card__container__order">
                        <Swiper
                            className='main__item__card__container__order__slider'
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={1}
                            spaceBetween={5}
                            navigation
                            pagination={{ clickable: true }}
                            loop={true}
                            loopedSlides={null}
                            loopedSlidesLimit={false}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide className='main__item__card__container__order__slider__slide'>
                                <Zoom 
                                    img={item.img}
                                    style={{borderRadius: 30}}
                                    zoomScale={3}
                                    width={800}
                                    height={800}
                                    className="main__item__card__container__order__slider__slide__img"
                                />
                            </SwiperSlide>
                            <SwiperSlide className='main__item__card__container__order__slider__slide'>
                                <Zoom 
                                    img={item.imgDetail1}
                                    style={{borderRadius: 30}}
                                    zoomScale={3}
                                    width={800}
                                    height={800}
                                    className="main__item__card__container__order__slider__slide__img"
                                />
                            </SwiperSlide>
                            <SwiperSlide className='main__item__card__container__order__slider__slide'>
                                <Zoom 
                                    img={item.imgDetail2}
                                    style={{borderRadius: 30}}
                                    zoomScale={3}
                                    width={800}
                                    height={800}
                                    className="main__item__card__container__order__slider__slide__img"
                                />
                            </SwiperSlide>
                            <SwiperSlide className='main__item__card__container__order__slider__slide'>
                                <Zoom 
                                    img={item.imgDetail3}
                                    style={{borderRadius: 30}}
                                    zoomScale={3}
                                    width={800}
                                    height={800}
                                    className="main__item__card__container__order__slider__slide__img"
                                />
                            </SwiperSlide>
                        </Swiper>
                        <h3 className="main__item__card__container__order__h3">Подробности спрашивать у менеджеров салона по телефону 
                            <a href="tel: +73812293920" className="main__item__card__container__order__h3__tel"> +7(3812)293920</a>
                        </h3>
                        <p className="main__item__card__container__order__p">Доступность:
                            <span className="main__item__card__container__order__p__span"> {item.availability} в наличии</span>
                        </p>
                        <NavLink to="/#" className="main__item__card__container__order__link"><button className="main__item__card__container__order__link__button">заказать</button></NavLink>
                    </div>
                    <div className="main__item__card__container__features">
                        <p className="main__item__card__container__features__line">{item.type}</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ItemCard;




























