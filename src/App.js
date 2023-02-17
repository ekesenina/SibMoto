import React from "react";
import Header from "./js/header";
import Home from "./js/home";
import Footer from "./js/footer";

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
