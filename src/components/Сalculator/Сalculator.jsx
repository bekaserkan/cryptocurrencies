import React, { useState } from "react";
import "./Сalculator.css";
import calc from "../../img/calendar-dot.svg";
import oshka from "../../img/oshka.svg";
import InputComponent from "../UI/InputComponent/InputComponent";

const Сalculator = () => {
  const [buySell, setBuySell] = useState("Купить");
  const [btc, setBtc] = useState("BTC Биткоин");
  const [currency, setCurrency] = useState("KGS");
  const [course, setCourse] = useState("ОАО «Бакай банк»");

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

  const course_data = [
    {
      text: "ОАО «Бакай банк»",
    },
    {
      text: "РСК банк»",
    },
    {
      text: "Айыл банк»",
    },
  ];

  return (
    <div className="calculator">
      <div className="container">
        <div>
          <h2 className="title_h1">
            Калькулятор валют{" "}
            <img
              style={{ width: 35, height: 35, marginLeft: 14 }}
              src={calc}
              alt=""
            />{" "}
          </h2>
        </div>
        <div className="calculator_block">
          <div className="calculator_box">
            <div className="grid">
              <div className="input_box">
                <label className="label_form">Я хочу</label>
                <InputComponent
                  value={buySell}
                  setValue={setBuySell}
                  data={buy_sell_data}
                  width={"100%"}
                />
              </div>
              <div className="input_box">
                <label className="label_form">В количестве</label>
                <input
                  className="input_form"
                  type="text"
                  name="last_name"
                  placeholder="Введите количество"
                  required
                />
              </div>
              <div className="input_box">
                <label className="label_form">Криптовалюту</label>
                <InputComponent
                  value={btc}
                  setValue={setBtc}
                  data={btc_data}
                  width={"100%"}
                />
              </div>
              <div className="input_box">
                <label className="label_form">За</label>
                <InputComponent
                  value={currency}
                  setValue={setCurrency}
                  data={currency_data}
                  width={"100%"}
                />
              </div>
            </div>
            <div className="input_box">
              <label className="label_form">По курсу от</label>
              <InputComponent
                value={course}
                setValue={setCourse}
                data={course_data}
                width={"100%"}
              />
            </div>
            <div className="gap">
              <div className="flex">
                <p className="eight">Формула</p>
                <p className="six">Результат</p>
              </div>
              <div className="flex">
                <p className="two_two">1000*66115.18</p>
                <p className="two_six">66 115 180</p>
              </div>
            </div>
          </div>
          <img className="image_rec" src={oshka} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Сalculator;
