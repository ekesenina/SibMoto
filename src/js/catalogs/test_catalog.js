import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ScrollToTop from "../..";
import itemImg from "../../img/ATV-500YS-LEOPARD-ST.jpg"
import { stockData } from "./goods";



const Test = () => {
    ScrollToTop()

    const navigate = useNavigate();
    const handleClick = (id, e) => {
        navigate(`/item/${id}`);
        e.stopPropagation();
      };

    return(
        <div className="main__products">
            <div className="main__products__template">
                {stockData.map((data, key) => {
                    return (
                        <div key={key} className="main__products__template__item">
                            <img src={data.img} alt="img" className="main__products__template__item__img"/>
                            <p className="main__products__template__item__name">{data.name}</p>
                            <button className="main__products__template__item__button" onClick={(e) => handleClick(data.id, e)}>подробнее</button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}




  export default Test;