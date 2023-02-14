// import slider from "../img/slide1.png";
import Slider from "./slider";

function Home(props) {
    return (
        <>
            <main className="main">
                <div className="main__slider">
                    <Slider/>
                    {/* <img src={slider} alt="logo" className="main__slider__content" /> */}
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
                    <div className="main__sales__content"></div>
                </div>
            </main>
        </>
    );
  }
  
  export default Home;