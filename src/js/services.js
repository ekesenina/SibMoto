import React from "react";
import ScrollToTop from "..";


import card1 from "../img/services_card1.png"
import card2 from "../img/services_card2.png"
import card3 from "../img/services_card3.png"
import card4 from "../img/services_card4.png"
import card5 from "../img/services_card5.png"

function Services (){
    ScrollToTop()
    return(
        <div className="main__services">
            <div className="main__services__block1">
                <h2 className="main__services__block1__h2">Ассортимент</h2>
            </div>
            <div className="main__services__block2">
                <div className="main__services__block2__text">
                    <h2 className="main__services__block2__text__h2">ВРЕМЯ НАЧАТЬ СВОЕ ПУТЕШЕСТВИЕ
                        <div className="main__services__block2__text__h2__underline"></div>
                    </h2>
                    <p className="main__services__block2__text__p">И мы предоставим вам все для этого.</p>
                </div>
                <div className="main__services__block2__cards">
                    <div className="main__services__block2__cards__card">
                        <img src={card1} alt="img"  className="main__services__block2__cards__card__photo"/>
                        <div className="main__services__block2__cards__card__text">
                            <h3 className="main__services__block2__cards__card__text__h3">Квадроциклы</h3>
                            <p className="main__services__block2__cards__card__text__p">Новая эра российских квадроциклов для широкого круга людей, комфортных при любых условиях эксплуатации.</p>
                        </div>
                    </div>
                    <div className="main__services__block2__cards__card">
                        <img src={card2} alt="img"  className="main__services__block2__cards__card__photo"/>
                        <div className="main__services__block2__cards__card__text">
                            <h3 className="main__services__block2__cards__card__text__h3">Снегоходы</h3>
                            <p className="main__services__block2__cards__card__text__p">Различные модели с уникальными особенностями для Ваших личных целей применения.</p>
                        </div>
                    </div>
                    <div className="main__services__block2__cards__card">
                        <img src={card3} alt="img"  className="main__services__block2__cards__card__photo"/>
                        <div className="main__services__block2__cards__card__text">
                            <h3 className="main__services__block2__cards__card__text__h3">Снегоболотоходы</h3>
                            <p className="main__services__block2__cards__card__text__p">Надёжный транспорт, способный преодолеть любое бездорожье или препятствие.</p>
                        </div>
                    </div>
                    <div className="main__services__block2__cards__card">
                        <img src={card4} alt="img"  className="main__services__block2__cards__card__photo"/>
                        <div className="main__services__block2__cards__card__text">
                            <h3 className="main__services__block2__cards__card__text__h3">Аксессуары и помощь</h3>
                            <p className="main__services__block2__cards__card__text__p">Широкий ассортимент позволяет приспособить мототехнику под Ваши индивидуальные потребности.</p>
                        </div>
                    </div>
                    <div className="main__services__block2__cards__card">
                        <img src={card5} alt="img"  className="main__services__block2__cards__card__photo"/>
                        <div className="main__services__block2__cards__card__text">
                            <h3 className="main__services__block2__cards__card__text__h3">Лодки</h3>
                            <p className="main__services__block2__cards__card__text__p">Для комфорта на водных просторах. Множество моделей на любой вкус.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__services__block3">
                <div className="main__services__block3__content">
                    <div className="main__services__block3__content__text">
                        <h2 className="main__services__block3__content__text__h2">Почему путешествия на природе?
                            <div className="main__services__block3__content__text__h2__underline"></div>
                        </h2>
                        <p className="main__services__block3__content__text__p">Впечатления, полученные во время экстремального приключения, запомнятся вам надолго, а наш транспорт позволит Вам:</p>
                        <ul className="main__services__block3__content__text__ul">
                            <li className="main__services__block3__content__text__ul__li">Получить яркие эмоции;</li>
                            <li className="main__services__block3__content__text__ul__li">Открыть новые неизведанные места;</li>
                            <li className="main__services__block3__content__text__ul__li">Насладиться природой с комфортом.</li>
                        </ul>
                    </div>
                    <div className="main__services__block3__content__text">
                        <h2 className="main__services__block3__content__text__h2">Чем ещё полезен этот транспорт?
                            <div className="main__services__block3__content__text__h2__underline"></div>
                        </h2>
                        <p className="main__services__block3__content__text__p">Если Ваша профессия непрерывно связана с исследованием малодоступных и неизвестных мест, то наша мототехника поможет Вам:</p>
                        <ul className="main__services__block3__content__text__ul">
                            <li className="main__services__block3__content__text__ul__li">Справиться с препятствиями на пути;</li>
                            <li className="main__services__block3__content__text__ul__li">Добраться даже к самому отдалённому уголку земли;</li>
                            <li className="main__services__block3__content__text__ul__li">Путешествовать безопасно и без лишних проблем.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;