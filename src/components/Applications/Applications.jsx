import React, { useState } from "react";
import "./Applications.css";
import { NavLink } from "react-router-dom";
import InputComponent from "../UI/InputComponent/InputComponent";

const Applications = () => {
  const [auth, setAuth] = useState(false);
  const [buySell, setBuySell] = useState("Купить");
  const [btc, setBtc] = useState("BTC Биткоин");
  const [currency, setCurrency] = useState("KGS");

  const buy_sell_data = [
    {
      text: "Купить",
    },
    {
      text: "Продать",
    },
  ];

  const btc_data = [
    {
      text: "BTC Биткоин",
    },
    {
      text: "BNB ",
    },
    {
      text: "ETH",
    },
    {
      text: "XRP",
    },
    {
      text: "USDT",
    },
  ];

  const currency_data = [
    {
      text: "KGS",
    },
    {
      text: "USD",
    },
    {
      text: "EUR",
    },
    {
      text: "RUB",
    },
    {
      text: "KZT",
    },
  ];

  return (
    <>
      <div className="applications">
        <div className="container">
          <div>
            <h2 className="title_h1">
              Заявки
              <div className="box_text">в течении 6 часов</div>
            </h2>
            <p className="text_p">
              Вы можете оставить заявку на выгодные предложения, действующие в
              течении 6 часов. Ознакомтесь с{" "}
              <a href="/" target="blank" className="link">
                правилами заявки
              </a>
              .
            </p>
          </div>
          <div className="applications_block">
            <div className="applications_block_head">
              <div className="input_block">Я хочу</div>
              <InputComponent
                value={buySell}
                setValue={setBuySell}
                data={buy_sell_data}
                width={135}
              />
              <input className="input_form" type="text" placeholder="сумма" />
              <InputComponent
                value={btc}
                setValue={setBtc}
                data={btc_data}
                width={170}
              />
              <div className="input_block">за</div>
              <InputComponent
                value={currency}
                setValue={setCurrency}
                data={currency_data}
                width={100}
              />
              <div className="input_block">по курсу</div>
              <input className="input_form" type="text" placeholder="курс" />
              <button className="button_form">Найти</button>
            </div>
            <div className="applications_block_body">
              <h3 className="title">Предложения</h3>
              {auth ? (
                ""
              ) : (
                <div className="div_auth">
                  <p className="text">
                    Тут появятся предложения об обмене криптовалюты.
                    Зарегистрируйтесь, чтобы добавить предложения
                  </p>
                  <div className="flex">
                    <NavLink to="/login">
                      <button className="button_form login">Войти</button>
                    </NavLink>
                    <NavLink to="/register">
                      <button className="button_form">Регистрация</button>
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applications;
