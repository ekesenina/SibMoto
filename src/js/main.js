import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./home";
import About from "./about";



class Main extends React.Component{
    render(){
        return(
                <div className="main">
                    <Routes>
                        <Route  path={"/"} exact element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </div>
        );
    }
}


export default Main; 