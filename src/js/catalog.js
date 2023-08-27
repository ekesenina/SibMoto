import React from "react";
import { NavLink } from "react-router-dom";
import SliderCatalog from "./sliderCatalog";
import ScrollToTop from "..";

function Catalog (){
    ScrollToTop()
    return(
        <div className="main__catalog">
            <div className="main__catalog__block1">
                <h2 className="main__catalog__block1__h2">Каталог</h2>
            </div>
            <div className="main__catalog__block2">
                <div className="main__catalog__block2__category">
                    <div className="main__catalog__block2__category__name">
                        <p className="main__catalog__block2__category__name__theme">Путешествия 
                            <hr className="main__catalog__block2__category__name__theme__underline"/>
                        </p>
                        <h1 className="main__catalog__block2__category__name__title">Квадроциклы</h1>
                        <p className="main__catalog__block2__category__name__text">Крутые квадроциклы от компании Stels.</p>
                    </div>
                    <SliderCatalog/>
                    <NavLink to="/quad"><button className="main__catalog__block2__category__button">каталог квадроциклов</button></NavLink>
                </div>
                <hr className="main__catalog__block2__underline"/>
                <div className="main__catalog__block2__category">
                    <div className="main__catalog__block2__category__name">
                        <p className="main__catalog__block2__category__name__theme">Снежные путешествия 
                            <hr className="main__catalog__block2__category__name__theme__underline"/>
                        </p>
                        <h1 className="main__catalog__block2__category__name__title">Снегоходы</h1>
                        <p className="main__catalog__block2__category__name__text">Крутые снегоходы от компании Stels.</p>
                    </div>
                    <SliderCatalog/>
                    <NavLink to="/snowmobile"><button className="main__catalog__block2__category__button">каталог снегоходов</button></NavLink>
                </div>
                <hr className="main__catalog__block2__underline"/>
                <div className="main__catalog__block2__category">
                    <div className="main__catalog__block2__category__name">
                        <p className="main__catalog__block2__category__name__theme">Бездорожье 
                            <hr className="main__catalog__block2__category__name__theme__underline"/>
                        </p>
                        <h1 className="main__catalog__block2__category__name__title">Вездеходы</h1>
                        <p className="main__catalog__block2__category__name__text">Крутые вездеходы.</p>
                    </div>
                    <SliderCatalog/>
                    <button className="main__catalog__block2__category__button">каталог вездеходов</button>
                </div>
                <hr className="main__catalog__block2__underline"/>
                <div className="main__catalog__block2__category">
                    <div className="main__catalog__block2__category__name">
                        <p className="main__catalog__block2__category__name__theme">Компактность 
                            <hr className="main__catalog__block2__category__name__theme__underline"/>
                        </p>
                        <h1 className="main__catalog__block2__category__name__title">Мотобуксировщики</h1>
                        <p className="main__catalog__block2__category__name__text">Компактная техника для любой местности.</p>
                    </div>
                    <SliderCatalog/>
                    <button className="main__catalog__block2__category__button">каталог мотобуксировщиков</button>
                </div>
                <hr className="main__catalog__block2__underline"/>
                <div className="main__catalog__block2__category">
                    <div className="main__catalog__block2__category__name">
                        <p className="main__catalog__block2__category__name__theme">Необходимость 
                            <hr className="main__catalog__block2__category__name__theme__underline"/>
                        </p>
                        <h1 className="main__catalog__block2__category__name__title">Лодки ПВХ</h1>
                        <p className="main__catalog__block2__category__name__text">Для рыбалки и охоты.</p>
                    </div>
                    <SliderCatalog/>
                    <button className="main__catalog__block2__category__button">каталог ПВХ лодок</button>
                </div>
                <hr className="main__catalog__block2__underline"/>
                <div className="main__catalog__block2__category">
                    <div className="main__catalog__block2__category__name">
                        <p className="main__catalog__block2__category__name__theme">Необходимость 
                            <hr className="main__catalog__block2__category__name__theme__underline"/>
                        </p>
                        <h1 className="main__catalog__block2__category__name__title">Лодочные моторы</h1>
                        <p className="main__catalog__block2__category__name__text">Для рыбалки и охоты.</p>
                    </div>
                    <SliderCatalog/>
                    <button className="main__catalog__block2__category__button">каталог моторов</button>
                </div>
                <hr className="main__catalog__block2__underline"/>
                <div className="main__catalog__block2__category">
                    <div className="main__catalog__block2__category__name">
                        <p className="main__catalog__block2__category__name__theme">Нужное 
                            <hr className="main__catalog__block2__category__name__theme__underline"/>
                        </p>
                        <h1 className="main__catalog__block2__category__name__title">Запчасти и аксессуары</h1>
                        <p className="main__catalog__block2__category__name__text">Все, что нужно, для вашего комфорта.</p>
                    </div>
                    <SliderCatalog/>
                    <button className="main__catalog__block2__category__button">каталог аксессуаров и запчастей</button>
                </div>
            </div>
        </div>
    );
}

export default Catalog;