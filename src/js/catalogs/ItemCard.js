import React from "react";
import ScrollToTop from "../..";
import { stockData } from "./goods";
import { useParams } from "react-router-dom";


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
                    <img src={item.img} alt="img" className="main__item__card__container__img" />
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




























// import React from "react";
// import ScrollToTop from "../..";
// import { stockData } from "./goods";
// import { useParams } from "react-router-dom";

// const Item = (props) => {
//     ScrollToTop()    

//     return(
//         <div className="main__item">
//             {stockData.map((data) => {
//                 return (
//                     <div className="main__item__card" >
//                         <img src={data.img} alt="img" className="main__item__card__img"/>
//                         <p className="main__item__card__name">{data.name}</p>
//                         <div className="main__item__card__features">
//                             <p className="main__item__card__features__line">{data.type}</p>
//                             <p className="main__item__card__features__line">{data.price}</p>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     )
// }





// export default Item;






















// const { id } = useParams();



// const Item = (props) => {
//     ScrollToTop()
    
    // const element = stockData.find((el, i) => i === stockData.id );

    // return(
    //     <div className="main__item">
    //         {stockData.map((data) => {
    //             const element = stockData.find((el, i) => i === data.id );
    //             if (element) {
    //                 return(
    //                     <div className="main__item__card">{data}
    //                         <img src={data.img} alt="img" className="main__item__card__img"/>
    //                         <p className="main__item__card__name">{data.name}</p>
    //                     </div>
    //                 )
    //             };
    //             return(
    //                 <div>error</div>
    //             )
                // return (
                //     <div className="main__item__card" >
                //         <img src={data.img} alt="img" className="main__item__card__img"/>
                //         <p className="main__item__card__name">{data.name}</p>
                //         <div className="main__item__card__features">
                //             <p className="main__item__card__features__line">{data.type}</p>
                //             <p className="main__item__card__features__line">{data.price}</p>
                //         </div>
                //     </div>
                // );
//             })}
//         </div>
//     )
// }


// const Item = (props) => {
//     ScrollToTop()
//     const getOneItem = props;

//     return(
//         <div className="main__item">
//             {stockData.map((data) => {
//                 let element = stockData.findIndex((el, i) => i === 1);
//                 // const element =stockData.findIndex((el, i) => i === currentElement)
//                 if (element) {
//                 return (
//                     <div className="main__item__card" >{element.data}
//                         <img src={element.img} alt="img" className="main__item__card__img"/>
//                         <p className="main__item__card__name">{data.name}</p>
//                         <div className="main__item__card__features">
//                             <p className="main__item__card__features__line">{data.type}</p>
//                             <p className="main__item__card__features__line">{data.price}</p>
//                         </div>
//                     </div>
//                 );}
//             })}
//         </div>
//     )
// }

























// const Item = (props) => {
//     ScrollToTop()
//     const getOneItem = id;
    

//     return(
//         <div className="main__item">
//             {stockData.map((data) => {
//                 return (
//                     <div className="main__item__card" >
//                         <img src={data.img} alt="img" className="main__item__card__img"/>
//                         <p className="main__item__card__name">{data.name}</p>
//                         <div className="main__item__card__features">
//                             <p className="main__item__card__features__line">{data.type}</p>
//                             <p className="main__item__card__features__line">{data.price}</p>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     )
// }