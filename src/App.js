import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./js/header";
import Main from "./js/main";
// import Home from "./js/home";
// import About from "./js/about";
import Footer from "./js/footer";

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header/>
        <Main/>
        {/* <Home/> */}
        {/* <About/> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
