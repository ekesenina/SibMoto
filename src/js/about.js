import React from "react";

import background from "../img/who_photo.png"
import aim from "../img/aim.png"


function About () {
    return(
        <div className="main__about">
            <div className="main__about__block1">
                {/* <img src={background} alt="logo" className="main__about__block1__background" /> */}
                <h2 className="main__about__block1__h2">кто мы такие ?</h2>
            </div>
            <div className="main__about__block2">
                <div className="main__about__block2__text">
                    <h2 className="main__about__block2__text__h2">Наша цель
                        <div className="main__about__block2__text__h2__underline"></div>
                    </h2>
                    <p className="main__about__block2__text__p">
                    Компания «STELS» c каждым годом совершенствует свою технику, чтобы она была безопасной, функциональной и практичной, а наш магазин стремится сделать покупку мототехники данной компании доступнее и удобнее.
                    </p>
                </div>
                <img src={aim} alt="logo" className="main__about__block2__photo" />
            </div>
            <div className="main__about__block3">
                <div className="main__about__block3__text">
                    <div className="main__about__block3__text__column">
                        <h2 className="main__about__block3__text__column__h2">
                            Ценный опыт
                            <div className="main__about__block3__text__column__h2__underline"></div>
                        </h2>
                        <div className="main__about__block3__text__column__p">
                            <p className="main__about__block3__text__column__p">Компания, благодаря безупречному качеству выпускаемых изделий, быстро завоевала российский рынок и овладела симпатиями отечественного потребителя. Грамотная маркетинговая политика и постоянное совершенствование производственных циклов стали основой быстрого развития и признания выпускаемой продукции авторитетными специалистами и рядовыми покупателями.</p>
                            <p className="main__about__block3__text__column__p">Успешно реализованная идея доступной цены на качественную конкурентоспособную технику сформировала серьёзную перспективу для прогресса данной отрасли, которая, безусловно, получит своё развитие в самом ближайшем будущем.</p>
                        </div>
                    </div>
                    <div className="main__about__block3__text__column">
                        <h2 className="main__about__block3__text__column__h2">
                            Главные качества
                            <div className="main__about__block3__text__column__h2__underline"></div>
                        </h2>
                        <div className="main__about__block3__text__column__p">
                            <ul className="main__about__block3__text__column__p">
                                <li className="main__about__block3__text__column__p">Привлекательная цена;</li>
                                <li className="main__about__block3__text__column__p">Исключительная надёжность;</li>
                                <li className="main__about__block3__text__column__p">Доступность любых запасных частей и аксессуаров для техники «STELS»;</li>
                                <li className="main__about__block3__text__column__p">Сервисная поддержка с заводской гарантией на все выпускаемые изделия.</li>
                            </ul>
                            <p className="main__about__block3__text__column__p">Эти ключевые моменты позволяют бренду «STELS» доминировать на отечественном рынке, предлагая принципиально новые для российского сегмента модели и разработки, успешно конкурирующие с японскими и американскими аналогами.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__about__block4"></div>
        </div>
    );
}



export default About;