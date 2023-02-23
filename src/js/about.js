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
        </div>
    );
}



export default About;