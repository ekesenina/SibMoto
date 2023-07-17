import React from "react";
import ScrollToTop from "../..";
import { stockData } from "./goods";
import { useParams } from "react-router-dom";
import Zoom from "react-img-hover-zoom";



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
                    <Zoom 
                        img={item.img}
                        zoomScale={3}
                        width={800}
                        height={800}
                        className="main__item__card__container__img"
                    />
                    <div className="main__item__card__container__features">
                        {item.type && <p className="main__item__card__container__features__line">{item.type}</p>}
                        {item.price && <p className="main__item__card__container__features__line">{item.price}</p>}
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ItemCard;

































// const ItemCard = () => {
//     ScrollToTop();

//     const { id } = useParams();

//     // Находим элемент массива stockData с соответствующим id
//     const item = stockData.find((data) => data.id === Number(id));

//     if (!item) {
//         return <div>Товар не найден</div>;
//     }

//     return (
//         <div className="main__item">
//             <div className="main__item__card">
//                 <h2 className="main__item__card__name">{item.name}</h2>
//                 <div className="main__item__card__container">
//                     <img src={item.img} alt="img" className="main__item__card__container__img" />
//                     <div className="main__item__card__container__features">
//                         {item.type && <p className="main__item__card__container__features__line">{item.type}</p>}
//                         {item.price && <p className="main__item__card__container__features__line">{item.price}</p>}
//                     </div>
//                 </div>
                
//             </div>
//         </div>
//     );
// };

// export default ItemCard;




























