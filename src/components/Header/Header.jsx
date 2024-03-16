import React from "react";
import "./Header.css";
import logo from "../../img/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="head">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <div className="center">
            <NavLink className="link" to="/exchange-bureaus">
              Обменные бюро
            </NavLink>
            <NavLink className="link" to="/cryptocurrencies">
              Криптовалюты
            </NavLink>
            <NavLink className="link" to="/cryptocurrency-archive">
              Архив криптовалют
            </NavLink>
          </div>
          <div className="flex">
            <NavLink to="/login">
              <button className="button_form login">Войти</button>
            </NavLink>
            <NavLink to="/register">
              <button className="button_form">Регистрация</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
