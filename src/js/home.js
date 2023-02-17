import Slider from "./slider";
import Sale1 from '../img/sale1.png';
import Sale2 from '../img/sale2.png';
import Like_icon from '../img/like_icon.svg';
import STELS from '../img/stels__img.svg';
import Technic1 from '../img/technic1.png';
import Technic3 from '../img/technic2.png';
import Technic2 from '../img/technic3.png';
import Technic4 from '../img/technic4.png';

function Home(props) {
    return (
        <>
            <main className="main">
                <div className="main__slider">
                    <Slider/>
                    <div className="main__slider__text">
                        
                        <h2 className="main__slider__text__h2">Почувствуй дикую природу
                            <div className="main__slider__text__h2__underline"></div>
                        </h2>
                        <h1 className="main__slider__text__h1">КУПИ НОВЫЙ ВЕЗДЕХОД</h1>
                        <button className="main__slider__text__button">перейти в каталог</button>
                    </div>
                </div>
                <div className="main__sales">
                    <h1 className="main__sales__h1">БУДУЩИЕ АКЦИИ И СОБЫТИЯ
                        <div className="main__sales__h1__underline"></div>
                    </h1>
                    <div className="main__sales__content">
                        <div className="main__sales__content__sale1">
                            <img src={Sale1} alt="img" className="main__sales__content__sale1__img" />
                            <h3 className="main__sales__content__sale1__h3">Выгодные предложения!</h3>
                            <p className="main__sales__content__sale1__p">Выгода до 50000 руб. на STELS VIKING и STELS ЕРМАК до 30 июня! Количество техники ограничено.</p>
                            <button className="main__sales__content__sale1__button">перейти в каталог</button>
                        </div>
                        <div className="main__sales__content__sale2">
                            <img src={Sale2} alt="img" className="main__sales__content__sale2__img" />
                            <h3 className="main__sales__content__sale1__h3">Выгодные предложения!</h3>
                            <p className="main__sales__content__sale1__p">Выгода до 50000 руб. на STELS VIKING и STELS ЕРМАК до 30 июня! Количество техники ограничено.</p>
                            <button className="main__sales__content__sale1__button">перейти в каталог</button>
                        </div>
                    </div>
                    <div className="main__sales__credit">
                        <div className="main__sales__credit__content">
                            <div className="main__sales__credit__content__text">
                                <h3 className="main__sales__credit__content__text__h3">Нет денег на покупку?</h3>
                                <p className="main__sales__credit__content__text__p">Покупайте сейчас, оплачивайте потом</p>
                            </div>
                            <img src={Like_icon} alt="img" className="main__sales__credit__content__img" />
                        </div>
                    </div>
                </div>
                <div className="main__stels">
                        <div className="main__stels__content">
                            <img src={STELS} alt="img" className="main__stels__content__img" />
                            <div className="main__stels__content__text">
                                <h2 className="main__stels__content__text__h2">КОМПАНИЯ STELS
                                    <div className="main__stels__content__text__h2__underline"></div>
                                </h2>
                                <p className="main__stels__content__text__p">Российский бренд, принадлежащий холдингу «Веломоторс», производит квадроциклы, вездеходы и снегоходы с 2009 года. Убедитесь в качестве одной из лучших компаний в стране по производству мототехники!</p>
                                <button className="main__stels__content__text__button">перейти в каталог</button>
                            </div>
                        </div>
                    </div>
                    <div className="main__technic">
                        <div className="main__technic__content">
                            <div className="main__technic__content__text">
                                <h2 className="main__technic__content__text__h2">Квадроциклы, снегоходы, вездеходы и аксессуары
                                    <div className="main__technic__content__text__h2__underline"></div>
                                </h2>
                                <div className="main__technic__content__text__paragraph__p">
                                    <p className="main__technic__content__text__paragraph__p">Прекрасная мототехника для любой погоды и местности.</p>
                                    <button className="main__technic__content__text__paragraph__p__button">перейти в каталог</button>
                                </div>
                            </div>
                            <div className="main__technic__content__img">
                                <img src={Technic1} alt="img" className="main__technic__content__img__img1" />
                                <img src={Technic2} alt="img" className="main__technic__content__img__img2" />
                                <img src={Technic3} alt="img" className="main__technic__content__img__img3" />
                                <img src={Technic4} alt="img" className="main__technic__content__img__img4" />
                            </div>
                        </div>
                    </div>
            </main>
        </>
    );
  }
  
  export default Home;