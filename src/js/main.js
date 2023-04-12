import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./home";
import About from "./about";
import Services from "./services";
import Catalog from "./catalog";



class Main extends React.Component{
    render(){
        return(
                <div className="main">
                    <Routes>
                        <Route  path={"/"} exact element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/catalog" element={<Catalog/>}/>
                    </Routes>
                </div>
        );
    }
}


export default Main; 