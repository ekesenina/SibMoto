import logo from "../img/logo1.svg";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import React from "react";

// import Main from "./main";
import Home from "./home";
import About from "./about";


class Header extends React.Component {
  render(){
    return (
      // <BrowserRouter>
      <>
        <header className="header">
            <img src={logo} alt="logo" className="header__logo" />
            <div className="header__nav">
                <NavLink to="/" exact activeClassName="active" className={"header__nav__a"}>Главная</NavLink>
                <NavLink to="/about" activeClassName="active" className={"header__nav__a"}>О нас</NavLink>
                <NavLink to="/services" activeClassName="active" className={"header__nav__a"}>Об услугах</NavLink>
                <NavLink to="/catalog" activeClassName="active" className={"header__nav__a"}>Каталог</NavLink>
                <NavLink to="/questions" activeClassName="active" className={"header__nav__a"}>Вопрос-ответ</NavLink>
                <NavLink to="/blog-posts" activeClassName="active" className={"header__nav__a"}>Ассортимент</NavLink>
              <button className="header__nav__button">Заказать</button>
            </div>
        </header>
      </>
      // </BrowserRouter>
    );
  }
}
  

// function Header() {
//     return (
//       <Router>
//       <header className="header">
//           <img src={logo} alt="logo" className="header__logo" />
//           <div className="header__nav">
//               <NavLink to="/" exact activeClassName="is_active" activeStyle={{color: '#FFCB03'}} className={"header__nav__a"}>Главная</NavLink>
//               <NavLink to="/about" activeClassName="is_active" className={"header__nav__a"}>О нас</NavLink>
//               <NavLink to="/services" activeClassName="is_active" className={"header__nav__a"}>Об услугах</NavLink>
//               <NavLink to="/catalog" activeClassName="is_active" className={"header__nav__a"}>Каталог</NavLink>
//               <NavLink to="/questions" activeClassName="is_active" className={"header__nav__a"}>Вопрос-ответ</NavLink>
//               <NavLink to="/blog-posts" activeClassName="is_active" className={"header__nav__a"}>Ассортимент</NavLink>
//             <button className="header__nav__button">Заказать</button>
//           </div>
//       </header>
//       </Router>
//     );
// }

  export default Header;

