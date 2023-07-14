import React from "react";
import ScrollToTop from "../..";
import { stockData } from "./goods";
import { useParams } from "react-router-dom";

// const { id } = useParams();


const Item = (props) => {
    ScrollToTop()
    const getOneItem = props;

    return(
        <div className="main__item">
            {stockData.map((data, key) => {
                return (
                    <div key={key} className="main__item__card" >
                        <img src={data.img} alt="img" className="main__item__card__img"/>
                        <p className="main__item__card__name">{data.name}</p>
                        <div className="main__item__card__features">
                            <p className="main__item__card__features__line">{data.type}</p>
                            <p className="main__item__card__features__line">{data.price}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Item;


