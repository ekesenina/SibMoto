import logo from "../img/logo1.svg";


function Header(props) {
    return (
      <header className="header">
          <img src={logo} alt="logo" className="header__logo" />
          <div className="header__nav">
            <a href="#" className="header__nav__a">Главная</a>
            <a href="#" className="header__nav__a">О нас</a>
            <a href="#" className="header__nav__a">Об услугах</a>
            <a href="#" className="header__nav__a">Каталог</a>
            <a href="#" className="header__nav__a">Вопрос-ответ</a>
            <a href="#" className="header__nav__a">Ассортимент</a>
            <button className="header__nav__button">Заказать</button>
          </div>
      </header>
    );
  }
  
  export default Header;

