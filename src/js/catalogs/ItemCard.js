// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// import SwiperCore from 'swiper'
// import Zoom from "react-img-hover-zoom";

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/autoplay'

// import { stockData } from "./goods";

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


// const ItemCard = () => {
//   const { id } = useParams();
//   const item = stockData.find((data) => data.id === Number(id));
//   const [activeSlide, setActiveSlide] = useState(0);

//   if (!item) {
//     return <div>Товар не найден</div>;
//   }

//   let amount;
//   if (item.availability === 0) {
//     amount = 'Отсутствует'
//   } else if (item.availability <= 5) {
//     amount = item.availability
//   } else if (item.availability > 5 || item.availability <= 10) {
//     amount = 'Много'
//   }

//   const handleThumbClick = (index) => {
//     setActiveSlide(index);
//   };

//   return (
//     <div className="main__item">
//       <div className="main__item__card">
//         <div className="main__item__card__container">
//           <div className="main__item__card__container__order">
//             <Swiper
//               className='main__item__card__container__order__slider'
//               navigation
//               pagination={{ clickable: true }}
//               loop={true}
//               onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
//             >
//               <SwiperSlide key="mainImageSlide" className='main__item__card__container__order__slider__slide'>
//                 <Zoom>
//                   <img
//                     src={item.img}
//                     alt={`Slide 1`}
//                     className="main__item__card__container__order__slider__slide__img"
//                   />
//                 </Zoom>
//               </SwiperSlide>
//               {Object.entries(item.imgDetail).map(([key, imgDetail], index) => (
//                 <SwiperSlide key={key} className='main__item__card__container__order__slider__slide'>
//                   <Zoom>
//                     <img
//                       src={imgDetail}
//                       alt={`Slide ${index + 2}`}
//                       className="main__item__card__container__order__slider__slide__img"
//                     />
//                   </Zoom>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <h3 className="main__item__card__container__order__h3">Подробности спрашивать у менеджеров салона по телефону
//               <a href="tel: +73812293920" className="main__item__card__container__order__h3__tel"> +7(3812)293920</a>
//             </h3>
//             <p className="main__item__card__container__order__p">В наличии:
//               <span className={`main__item__card__container__order__p__span ${amount === 'Отсутствует' ? 'red' : 'green'}`}> {amount} </span>
//             </p>
//             <NavLink to="/#" className="main__item__card__container__order__link"><button className="main__item__card__container__order__link__button">заказать</button></NavLink>
//           </div>
//           <div className="main__item__card__container__description">
//             <h2 className="main__item__card__container__description__name">{item.name}</h2>
//             <div className="main__item__card__container__description__text">
//               {Object.values(item.description).map((description, index) => (
//                 <div className="main__item__card__container__description__text__p" key={index}> {description} </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="main__item__card__features">
//           <table className="main__item__card__features__table">
//             <thead className="main__item__card__features__table__head">
//               <tr className="main__item__card__features__table__head__tr">
//                 <th scope="col" className="main__item__card__features__table__head__tr__th"> Характеристики </th>
//                 <th className="main__item__card__features__table__head__tr__th">  </th>
//               </tr>
//             </thead>
//             <tbody className="main__item__card__features__table__body">
//               {Object.entries(item.features).map(([featureName, featureValue], index) => (
//                 <tr className="main__item__card__features__table__body__tr" key={index}>
//                   <td scope="col" className="main__item__card__features__table__body__tr__name"> {featureName}: </td>
//                   <td scope="col" className="main__item__card__features__table__body__tr__value"> {featureValue} </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemCard;

















































import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper'
import Zoom from "react-img-hover-zoom";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

import { stockData } from "./goods";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ItemCard = () => {
  const { id } = useParams();
  const item = stockData.find((data) => data.id === Number(id));
  const [activeSlide, setActiveSlide] = useState(0);

  if (!item) {
    return <div>Товар не найден</div>;
  }

  let amount;
  if (item.availability === 0) {
    amount = 'Отсутствует'
  } else if (item.availability <= 5) {
    amount = item.availability
  } else if (item.availability > 5 || item.availability <= 10) {
    amount = 'Много'
  }

  const handleThumbClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="main__item">
      <div className="main__item__card">
        <div className="main__item__card__container">
          <div className="main__item__card__container__order">
            <Swiper
              className='main__item__card__container__order__slider'
              navigation
              pagination={{ clickable: true }}
              loop={true}
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            >
                <SwiperSlide className='main__item__card__container__order__slider__slide'>
                  <Zoom
                    img={item.img}
                    style={{ borderRadius: 30 }}
                    zoomScale={3}
                    width={800}
                    height={800}
                    className="main__item__card__container__order__slider__slide__img"
                  >
                </Zoom>
                </SwiperSlide>
              {Object.values(item.imgDetail).map((imgDetail, index) => (
                <SwiperSlide key={index} className='main__item__card__container__order__slider__slide'>
                  <Zoom
                    img={imgDetail}
                    style={{ borderRadius: 30 }}
                    zoomScale={3}
                    width={800}
                    height={800}
                    className="main__item__card__container__order__slider__slide__img"
                  >
                </Zoom>
                </SwiperSlide>
              ))}
            </Swiper>
            <h3 className="main__item__card__container__order__h3">Подробности спрашивать у менеджеров салона по телефону
              <a href="tel: +73812293920" className="main__item__card__container__order__h3__tel"> +7(3812)293920</a>
            </h3>
            <p className="main__item__card__container__order__p">В наличии:
              <span className={`main__item__card__container__order__p__span ${amount === 'Отсутствует' ? 'red' : 'green'}`}> {amount} </span>
            </p>
            <NavLink to="/#" className="main__item__card__container__order__link"><button className="main__item__card__container__order__link__button">заказать</button></NavLink>
          </div>
          <div className="main__item__card__container__description">
            <h2 className="main__item__card__container__description__name">{item.name}</h2>
            <div className="main__item__card__container__description__text">
              {Object.values(item.description).map((description, index) => (
                <div className="main__item__card__container__description__text__p" key={index}> {description} </div>
              ))}
            </div>
          </div>
        </div>
        <div className="main__item__card__features">
          <table className="main__item__card__features__table">
            <thead className="main__item__card__features__table__head">
              <tr className="main__item__card__features__table__head__tr">
                <th scope="col" className="main__item__card__features__table__head__tr__th"> Характеристики </th>
                <th className="main__item__card__features__table__head__tr__th">  </th>
              </tr>
            </thead>
            <tbody className="main__item__card__features__table__body">
              {Object.entries(item.features).map(([featureName, featureValue], index) => (
                <tr className="main__item__card__features__table__body__tr" key={index}>
                  <td scope="col" className="main__item__card__features__table__body__tr__name"> {featureName}: </td>
                  <td scope="col" className="main__item__card__features__table__body__tr__value"> {featureValue} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;


































































// // import React from "react";
// // import ScrollToTop from "../..";
// // import { stockData } from "./goods";
// // import { useParams } from "react-router-dom";
// // import { useState } from "react";
// // import { NavLink } from "react-router-dom";
// // import Zoom from "react-img-hover-zoom";

// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/autoplay'


// // import { Thumbs, Controller } from 'swiper/react';



// // import React from "react";
// // import { useParams } from "react-router-dom";
// // import { NavLink } from "react-router-dom";
// // import { Swiper, SwiperSlide, Thumbs, Controller } from 'swiper/react';
// // import Zoom from "react-img-hover-zoom";
// // import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// // import 'swiper/swiper.min.css';
// // import 'swiper/components/navigation/navigation.min.css';
// // import 'swiper/components/pagination/pagination.min.css';
// // import 'swiper/components/scrollbar/scrollbar.min.css';

// // import { stockData } from "./goods";








// import React from "react";
// import { useState } from 'react';
// import { useParams } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Thumbs } from 'swiper/modules';
// import Zoom from "react-img-hover-zoom";
// // import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// // import 'swiper/swiper.min.css';
// // import 'swiper/components/navigation/navigation.min.css';
// // import 'swiper/components/pagination/pagination.min.css';
// // import 'swiper/components/scrollbar/scrollbar.min.css';

// import { stockData } from "./goods";

// const ItemCard = () => {
//   const { id } = useParams();
//   const item = stockData.find((data) => data.id === Number(id));
//  const [activeSlide, setActiveSlide] = useState(0);

//   if (!item) {
//     return <div>Товар не найден</div>;
//   }

//   let amount;
//   if (item.availability === 0) {
//     amount = 'Отсутствует'
//   } else if (item.availability <= 5) {
//     amount = item.availability
//   } else if (item.availability > 5 || item.availability <= 10) {
//     amount = 'Много'
//   }

//   const handleThumbClick = (index) => {
//     setActiveSlide(index);
//   };

//   return (
//     <div className="main__item">
//       <div className="main__item__card">
//         <h2 className="main__item__card__name">{item.name}</h2>
//         <div className="main__item__card__container">
//           <div className="main__item__card__container__order">
//             <Swiper
//               className='main__item__card__container__order__slider'
//               modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//               grabCursor={true}
//               centeredSlides={true}
//               slidesPerView={1}
//               spaceBetween={5}
//               navigation
//               pagination={{ clickable: true }}
//               loop={true}
//               loopedSlides={null}
//               loopedSlidesLimit={false}
//               onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
//             >
//               {Object.values(item.imgDetail).map((imgDetail, index) => (
//                 <SwiperSlide key={index} className='main__item__card__container__order__slider__slide'>
//                   <Zoom
//                     img={imgDetail}
//                     style={{ borderRadius: 30 }}
//                     zoomScale={3}
//                     width={800}
//                     height={800}
//                     className="main__item__card__container__order__slider__slide__img"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <Thumbs
//               className="main__item__card__container__order__thumbs"
//               swiper={{ activeIndex: activeSlide }}
//             >
//               {Object.values(item.imgDetail).map((imgDetail, index) => (
//                 <SwiperSlide key={index} className={`main__item__card__container__order__thumbs__slide ${activeSlide === index ? 'active' : ''}`}>
//                   <img
//                     src={imgDetail}
//                     alt={`Thumbnail ${index + 1}`}
//                     className="main__item__card__container__order__thumbs__slide__img"
//                     onClick={() => handleThumbClick(index)}
//                   />
//                 </SwiperSlide>
//               ))}
//             </Thumbs>
//             <h3 className="main__item__card__container__order__h3">Подробности спрашивать у менеджеров салона по телефону
//               <a href="tel: +73812293920" className="main__item__card__container__order__h3__tel"> +7(3812)293920</a>
//             </h3>
//             <p className="main__item__card__container__order__p">В наличии:
//               <span className={`main__item__card__container__order__p__span ${amount === 'Отсутствует' ? 'red' : 'green'}`}> {amount} </span>
//             </p>
//             <NavLink to="/#" className="main__item__card__container__order__link"><button className="main__item__card__container__order__link__button">заказать</button></NavLink>
//           </div>
//           <div className="main__item__card__container__features">
//             <p className="main__item__card__container__features__line">{item.type}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemCard;


























































// // import React from "react";
// // import ScrollToTop from "../..";
// // import { stockData } from "./goods";
// // import { useParams } from "react-router-dom";
// // import { useState } from "react";
// // import { NavLink } from "react-router-dom";
// // import Zoom from "react-img-hover-zoom";

// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/autoplay'


// // import { Thumbs, Controller } from 'swiper/react';



// import React from "react";
// import { useParams } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// // import { Swiper, SwiperSlide, Thumbs, Controller } from 'swiper/react';
// import Zoom from "react-img-hover-zoom";
// // import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// // import 'swiper/swiper.min.css';
// // import 'swiper/components/navigation/navigation.min.css';
// // import 'swiper/components/pagination/pagination.min.css';
// // import 'swiper/components/scrollbar/scrollbar.min.css';

// import { stockData } from "./goods";

// const ItemCard = () => {
//   const { id } = useParams();
//   const item = stockData.find((data) => data.id === Number(id));

//   if (!item) {
//     return <div>Товар не найден</div>;
//   }

//   let amount;
//   if (item.availability === 0) {
//     amount = 'Отсутствует'
//   } else if (item.availability <= 5) {
//     amount = item.availability
//   } else if (item.availability > 5 || item.availability <= 10) {
//     amount = 'Много'
//   }

//   return (
//     <div className="main__item">
//       <div className="main__item__card">
//         <h2 className="main__item__card__name">{item.name}</h2>
//         <div className="main__item__card__container">
//           <div className="main__item__card__container__order">
//             <Swiper
//               className='main__item__card__container__order__slider'
//               modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//               grabCursor={true}
//               centeredSlides={true}
//               slidesPerView={1}
//               spaceBetween={5}
//               navigation
//             //   pagination={{ clickable: true }}
//               loop={true}
//               loopedSlides={null}
//               loopedSlidesLimit={false}
//             >
//               {Object.values(item.imgDetail).map((imgDetail, index) => (
//                 <SwiperSlide key={index} className='main__item__card__container__order__slider__slide'>
//                   <Zoom
//                     img={imgDetail}
//                     style={{ borderRadius: 30 }}
//                     zoomScale={3}
//                     width={800}
//                     height={800}
//                     className="main__item__card__container__order__slider__slide__img"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <Swiper
//               modules={[Navigation, Pagination, A11y ]}
//               spaceBetween={10}
//               slidesPerView={3}
//               navigation
//               pagination={{ clickable: true }}
//               grabCursor={true}
//               freeMode={true}
//               watchSlidesVisibility={true}
//               watchSlidesProgress={true}
//               className="main__item__card__container__order__thumbs"
//             >
//               {Object.values(item.imgDetail).map((imgDetail, index) => (
//                 <SwiperSlide key={index} className='main__item__card__container__order__thumbs__slide'>
//                   <img
//                     src={imgDetail}
//                     alt={`Thumbnail ${index + 1}`}
//                     className="main__item__card__container__order__thumbs__slide__img"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <h3 className="main__item__card__container__order__h3">Подробности спрашивать у менеджеров салона по телефону
//               <a href="tel: +73812293920" className="main__item__card__container__order__h3__tel"> +7(3812)293920</a>
//             </h3>
//             <p className="main__item__card__container__order__p">В наличии:
//               <span className={`main__item__card__container__order__p__span ${amount === 'Отсутствует' ? 'red' : 'green'}`}> {amount} </span>
//             </p>
//             <NavLink to="/#" className="main__item__card__container__order__link"><button className="main__item__card__container__order__link__button">заказать</button></NavLink>
//           </div>
//           <div className="main__item__card__container__features">
//             <p className="main__item__card__container__features__line">{item.type}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemCard;




















// const ItemCard = () => {
//     ScrollToTop();

//     const { id } = useParams();

//     let amount;

//     const item = stockData.find((data) => data.id === Number(id));

//     // if (item.availability === 0) {
//     //     amount = 'Нет в наличии'
//     // } else if (item.availability > 5 || item.availability <= 10) {
//     //     amount = 'Много'
//     // } else if (item.availability <= 5) {
//     //     amount = 'Мало'
//     // } else if (item.availability > 10) {
//     //     amount = 'Дохуя'
//     // }

//     if (item.availability === 0) {
//         amount = 'Отсутствует'
//     } else if (item.availability <= 5) {
//         amount = item.availability
//     } else if (item.availability > 5 || item.availability <= 10) {
//         amount = 'Много'
//     }

//     if (!item) {
//         return <div>Товар не найден</div>;
//     }

//     return (
//         <div className="main__item">
//             <div className="main__item__card">
//                 <h2 className="main__item__card__name">{item.name}</h2>
//                 <div className="main__item__card__container">
//                     <div className="main__item__card__container__order">
//                         <Swiper
//                             className='main__item__card__container__order__slider'
//                             modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//                             grabCursor={true}
//                             centeredSlides={true}
//                             slidesPerView={1}
//                             spaceBetween={5}
//                             navigation
//                             pagination={{ clickable: true }}
//                             loop={true}
//                             loopedSlides={null}
//                             loopedSlidesLimit={false}
//                             onSwiper={(swiper) => console.log(swiper)}
//                             onSlideChange={() => console.log('slide change')}
//                         >
//                             {Object.values(item.imgDetail).map((imgDetail, index) => (
//                                 <SwiperSlide key={index} className='main__item__card__container__order__slider__slide'>
//                                     <Zoom
//                                         img={imgDetail}
//                                         style={{ borderRadius: 30 }}
//                                         zoomScale={3}
//                                         width={800}
//                                         height={800}
//                                         className="main__item__card__container__order__slider__slide__img"
//                                     />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                         <h3 className="main__item__card__container__order__h3">Подробности спрашивать у менеджеров салона по телефону
//                             <a href="tel: +73812293920" className="main__item__card__container__order__h3__tel"> +7(3812)293920</a>
//                         </h3>
//                         <p className="main__item__card__container__order__p">В наличии:
//                             <span className={`main__item__card__container__order__p__span ${amount === 'Отсутствует' ? 'red' : 'green'}`}> {amount} </span>
//                         </p>
//                         <NavLink to="/#" className="main__item__card__container__order__link"><button className="main__item__card__container__order__link__button">заказать</button></NavLink>
//                     </div>
//                     <div className="main__item__card__container__features">
//                         <p className="main__item__card__container__features__line">{item.type}</p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default ItemCard;