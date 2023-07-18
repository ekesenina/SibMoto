// import logo from "../img/logo1.svg";
// import { NavLink } from "react-router-dom";
// import React from "react";

// class Header extends React.Component {
//   render(){
//     return (
//       // <BrowserRouter>
//       <>
//         <header className="header">
//             <img src={logo} alt="logo" className="header__logo" />
//             <div className="header__nav">
//                 <NavLink to="/" exact activeClassName="active" className={"header__nav__a"}>Главная</NavLink>
//                 <NavLink to="/about" activeClassName="active" className={"header__nav__a"}>О нас</NavLink>
//                 <NavLink to="/services" activeClassName="active" className={"header__nav__a"}>Об услугах</NavLink>
//                 <NavLink to="/catalog" activeClassName="active" className={"header__nav__a"}>Каталог</NavLink>
//                 <NavLink to="/questions" activeClassName="active" className={"header__nav__a"}>Вопрос-ответ</NavLink>
//                 <NavLink to="/blog-posts" activeClassName="active" className={"header__nav__a"}>Ассортимент</NavLink>
//               <button className="header__nav__button">Заказать</button>
//             </div>
//         </header>
//       </>
//     );
//   }
// }

// export default Header;




import logo from "../img/logo1.svg";
import { NavLink } from "react-router-dom";
import React from "react";

class Header extends React.Component {
  state = {
    isDropdownOpen: false
  };

  handleDropdownToggle = () => {
    this.setState(prevState => ({
      isDropdownOpen: !prevState.isDropdownOpen
    }));
  };

  render() {
    const { isDropdownOpen } = this.state;

    return (
      <>
        <header className="header">
          <img src={logo} alt="logo" className="header__logo" />
          <div className="header__nav">
            <NavLink to="/" exact activeClassName="active" className="header__nav__a">Главная</NavLink>
            <NavLink to="/about" activeClassName="active" className="header__nav__a">О нас</NavLink>
            <NavLink to="/services" activeClassName="active" className="header__nav__a">Об услугах</NavLink>

            <div
              onMouseEnter={this.handleDropdownToggle}
              onMouseLeave={this.handleDropdownToggle}
              className={`header__nav__dropdown ${isDropdownOpen ? 'active' : ''}`}
            >
              <NavLink to="/catalog" activeClassName="active" className="header__nav__a">Каталог</NavLink>
              <div className="header__nav__dropdown-content">
                <NavLink to="/catalog/quads" activeClassName="active" className="header__nav__dropdown-content__a">Квадроциклы</NavLink>
                <NavLink to="/catalog/snowmobiles" activeClassName="active" className="header__nav__dropdown-content__a">Снегоходы</NavLink>
                <NavLink to="/catalog/boats" activeClassName="active" className="header__nav__dropdown-content__a">Лодки</NavLink>
                <NavLink to="/catalog/accessories" activeClassName="active" className="header__nav__dropdown-content__a">Аксессуары</NavLink>
              </div>
            </div>

            <NavLink to="/questions" activeClassName="active" className="header__nav__a">Вопрос-ответ</NavLink>
            <NavLink to="/blog-posts" activeClassName="active" className="header__nav__a">Ассортимент</NavLink>
            <button className="header__nav__button">Заказать</button>
          </div>
        </header>
      </>
    );
  }
}

export default Header;


