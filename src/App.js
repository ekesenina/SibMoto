import React from "react";
import Header from "./js/header";
import Home from "./js/home";

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;
