import React, { useState } from "react";
import "./Applications.css";
import { NavLink, useNavigate } from "react-router-dom";
import InputComponent from "../UI/InputComponent/InputComponent";
import user from "../../img/user.svg";

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

const data = [
  {
    img: user,
    name: "Кенешбеков Бекболсун",
    count: 2,
    valute: "BTC (Биткоин)",
    cours: "64.116",
    time: "12:30",
  },
];

const Applications = () => {
  const [auth, setAuth] = useState(true);
  const [buySell, setBuySell] = useState("Купить");
  const [btc, setBtc] = useState("BTC Биткоин");
  const [currency, setCurrency] = useState("KGS");
  const navigate = useNavigate();

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
                <div className="offers">
                  <div className="offer">
                    <p className="offer_text">Участник</p>
                    <p className="offer_text">Количество</p>
                    <p className="offer_text">Валюта</p>
                    <p className="offer_text">По курсу</p>
                    <p className="offer_text">Время</p>
                    <p style={{ textAlign: "end" }} className="offer_text">
                      Торгуй
                    </p>
                  </div>
                  <div className="offer_blocks">
                    {data.map((el, id) => (
                      <div
                        onClick={() => navigate(`/applications-details/${id}`)}
                        className="offer_block"
                      >
                        <div className="flex">
                          <img className="user" src={el.img} alt="" />
                          <p className="offer_block_title">{el.name}</p>
                        </div>
                        <p className="offer_block_text">{el.count}</p>
                        <p className="offer_block_text">{el.valute}</p>
                        <p className="offer_block_text">{el.cours}</p>
                        <p className="offer_block_time">{el.time}</p>
                        <button className="button_form offer_block_btn">
                          Купить
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
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
