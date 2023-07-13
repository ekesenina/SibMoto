import Slider from "./slider";
import Sale1 from '../img/sale1.png';
import Sale2 from '../img/sale2.png';
import Like_icon from '../img/like_icon.svg';
import STELS from '../img/stels__img.svg';
import Technic1 from '../img/technic1.png';
import Technic3 from '../img/technic2.png';
import Technic2 from '../img/technic3.png';
import Technic4 from '../img/technic4.png';
import React from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "..";



function Home () {
    ScrollToTop()
    return (
        <div>
            <div className="home">
                <div className="home__slider">
                    <Slider/>
                    <div className="home__slider__text">
                        <div className="home__slider__text__h2">Почувствуй дикую природу
                            <div className="home__slider__text__h2__underline"></div>
                        </div>
                        <h1 className="home__slider__text__h1">КУПИ НОВЫЙ ВЕЗДЕХОД</h1>
                        <NavLink to="/catalog"><button className="home__slider__text__button">перейти в каталог</button></NavLink>
                    </div>
                </div>
                <div className="home__sales">
                    <div className="home__sales__h1">БУДУЩИЕ АКЦИИ И СОБЫТИЯ
                        <div className="home__sales__h1__underline"></div>
                    </div>
                    <div className="home__sales__content">
                        <div className="home__sales__content__sale1">
                            <img src={Sale1} alt="img" className="home__sales__content__sale1__img" />
                            <h3 className="home__sales__content__sale1__h3">Выгодные предложения!</h3>
                            <p className="home__sales__content__sale1__p">Выгода до 50000 руб. на STELS VIKING и STELS ЕРМАК до 30 июня! Количество техники ограничено.</p>
                            <NavLink to="/catalog"><button className="home__sales__content__sale1__button">перейти в каталог</button></NavLink>
                        </div>
                        <div className="home__sales__content__sale2">
                            <img src={Sale2} alt="img" className="home__sales__content__sale2__img" />
                            <h3 className="home__sales__content__sale1__h3">Выгодные предложения!</h3>
                            <p className="home__sales__content__sale1__p">Выгода до 50000 руб. на STELS VIKING и STELS ЕРМАК до 30 июня! Количество техники ограничено.</p>
                            <NavLink to="/catalog"><button className="home__sales__content__sale1__button">перейти в каталог</button></NavLink>
                        </div>
                    </div>
                    <div className="home__sales__credit">
                        <div className="home__sales__credit__content">
                            <div className="home__sales__credit__content__text">
                                <h3 className="home__sales__credit__content__text__h3">Нет денег на покупку?</h3>
                                <p className="home__sales__credit__content__text__p">Покупайте сейчас, оплачивайте потом</p>
                            </div>
                            <img src={Like_icon} alt="img" className="home__sales__credit__content__img" />
                        </div>
                    </div>
                </div>
                <div className="home__stels">
                        <div className="home__stels__content">
                            <img src={STELS} alt="img" className="home__stels__content__img" />
                            <div className="home__stels__content__text">
                                <div className="home__stels__content__text__h2">КОМПАНИЯ STELS
                                    <div className="home__stels__content__text__h2__underline"></div>
                                </div>
                                <p className="home__stels__content__text__p">Российский бренд, принадлежащий холдингу «Веломоторс», производит квадроциклы, вездеходы и снегоходы с 2009 года. Убедитесь в качестве одной из лучших компаний в стране по производству мототехники!</p>
                                <NavLink to="/catalog"><button className="home__stels__content__text__button">перейти в каталог</button></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="home__technic">
                        <div className="home__technic__content">
                            <div className="home__technic__content__text">
                                <div className="home__technic__content__text__h2">Квадроциклы, снегоходы, вездеходы и аксессуары
                                    <div className="home__technic__content__text__h2__underline"></div>
                                </div>
                                <div className="home__technic__content__text__paragraph__p">
                                    <p className="home__technic__content__text__paragraph__p">Прекрасная мототехника для любой погоды и местности.</p>
                                    <NavLink to="/catalog"><button className="home__technic__content__text__paragraph__p__button">перейти в каталог</button></NavLink>
                                </div>
                            </div>
                            <div className="home__technic__content__img">
                                <img src={Technic1} alt="img" className="home__technic__content__img__img1" />
                                <img src={Technic2} alt="img" className="home__technic__content__img__img2" />
                                <img src={Technic3} alt="img" className="home__technic__content__img__img3" />
                                <img src={Technic4} alt="img" className="home__technic__content__img__img4" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
  }


  export default Home;