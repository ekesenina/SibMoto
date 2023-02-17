import React from "react";

function Footer(props) {
    return (
      <footer className="footer">
          <div className="footer__contacts">
            <div className="footer__contacts__adress">
                <p className="footer__contacts__adress__item"><span className="footer__contacts__adress__item__bold">Адрес:</span> Омская область, с. Дружино, ул. Придорожная 12</p>
                <p className="footer__contacts__adress__item"><span className="footer__contacts__adress__item__bold">Почта:</span><a href="mailto: sibmoto-omsk@yandex.ru" className="footer__contacts__adress__item__a"> sibmoto-omsk@yandex.ru</a></p>
                <div className="footer__contacts__adress__item__copyright">Copyright © 2023 SIBMOTO</div>
            </div>
            
            <div className="footer__contacts__phones">
                <p className="footer__contacts__phones__item"><span className="footer__contacts__phones__item__bold"> Телефон:</span>&nbsp;&nbsp; <a href="tel: +79238281981" className="footer__contacts__phones__item__a"> 8 (923) 828-19-81</a></p>
                <p className="footer__contacts__phones__item"><span className="footer__contacts__phones__item__bold"> Отдел <br/> Сервиса:</span> <div><br/>&nbsp;&nbsp;<a href="tel: +73812493240" className="footer__contacts__phones__item__a">8 3812 49-32-40</a> <br/>&nbsp;&nbsp;<a href="tel: +79533999640" className="footer__contacts__phones__item__a">8 (953) 399-96-40</a></div></p>
            </div>
          </div>
      </footer>
    );
  }
  
  export default Footer;