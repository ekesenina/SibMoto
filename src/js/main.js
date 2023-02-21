import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Home from "./home";
import About from "./about";



class Main extends React.Component{
    render(){
        return(
                <div className="main">
                    <Switch>
                        <Route  path={"/"} exact component={Home}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </div>
        );
    }
}


export default Main; 