import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "./home";
import About from "./about";
import Services from "./services";
import Catalog from "./catalog";
import Quad from "./catalogs/Quad";
import Test from "./catalogs/test_catalog";
import Item from "./catalogs/ItemCard";



class Main extends React.Component{
    render(){
        return(
                <div className="main">
                    <Routes>
                        <Route  path={"/"} exact element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/catalog" element={<Catalog/>}/>
                        <Route path="/quad" element={<Test/>}/>
                        <Route path="/item/:id" element={<Item/>}/>
                    </Routes>
                </div>
        );
    }
}


export default Main; 