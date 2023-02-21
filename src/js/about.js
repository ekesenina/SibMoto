import React from "react";

import background from "../img/who_photo.png"


function About () {
    return(
        <div className="main__about">
            <div className="main__about__block1">
                <img src={background} alt="logo" className="main__about__block1__background" />
            <h2 className="main__about__block1__h2">кто мы такие ?</h2>
            </div>
            
        </div>
    );
}



export default About;