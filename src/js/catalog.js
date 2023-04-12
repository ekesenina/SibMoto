import React from "react";
import SliderCatalog from "./sliderCatalog";


function Catalog (){
    return(
        <div className="main__catalog">
            <div className="main__catalog__block1">
                <h2 className="main__catalog__block1__h2">Каталог</h2>
            </div>
            <div className="main__catalog__block2">
                <div className="main__catalog__block2__quadro">
                    <SliderCatalog/>
                </div>
                <div className="main__catalog__block2__quadro"></div>
                <div className="main__catalog__block2__quadro"></div>
                <div className="main__catalog__block2__quadro"></div>
                <div className="main__catalog__block2__quadro"></div>
                <div className="main__catalog__block2__quadro"></div>
                <div className="main__catalog__block2__quadro"></div>
            </div>
        </div>
    );
}

export default Catalog;