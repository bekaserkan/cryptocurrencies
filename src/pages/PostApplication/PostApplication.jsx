import React, { useState } from "react";
import "./PostApplication.css";
import InputComponent from "../../components/UI/InputComponent/InputComponent";
import arrows from "../../img/arrows.svg";
import { useNavigate } from "react-router-dom";

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

const buy_sell_data = [
  {
    text: "Купить",
  },
  {
    text: "Продать",
  },
];

const payment_data = [
  {
    text: "Банковский перевод",
  },
  {
    text: "РСК банк»",
  },
  {
    text: "Айыл банк»",
  },
];

const PostApplication = () => {
  const [btcApplication, setBtcApplication] = useState("BTC Биткоин");
  const [buySell, setBuySell] = useState("Купить");
  const [payment, setPayment] = useState("Банковский перевод");
  const [dataApplication, setDataApplication] = useState({
    cryptocurrency: btcApplication,
    action: buySell,
    quantity: "",
    payment: payment,
    place_of_transaction: "",
    terms_of_a_transaction: "",
  });
  const navigate = useNavigate();

  return (
    <div className="post_application">
      <div className="container">
        <img
          onClick={() => navigate(-1)}
          className="back"
          src={arrows}
          alt=""
        />
        <div className="white_block">
          <h5>Опубликовать заявку</h5>
          <form className="form_password">
            <div className="grid">
              <div>
                <div className="input_box">
                  <label className="label_form">Криптовалюта</label>
                  <InputComponent
                    value={btcApplication}
                    setValue={setBtcApplication}
                    data={btc_data}
                    width={"100%"}
                  />
                </div>
                <div className="input_box">
                  <label className="label_form">Действие</label>
                  <InputComponent
                    value={buySell}
                    setValue={setBuySell}
                    data={buy_sell_data}
                    width={"100%"}
                  />
                </div>
                <div className="input_box">
                  <label className="label_form">Количество</label>
                  <input
                    className="input_form"
                    value={dataApplication.quantity}
                    onChange={(e) =>
                      setDataApplication({
                        ...dataApplication,
                        quantity: e.target.value,
                      })
                    }
                    type="number"
                    placeholder="Введите количество валюты"
                    required
                  />
                </div>
                <div className="input_box">
                  <label className="label_form">Оплата</label>
                  <InputComponent
                    value={payment}
                    setValue={setPayment}
                    data={payment_data}
                    width={"100%"}
                  />
                </div>
              </div>
              <div>
                <div className="input_box">
                  <label className="label_form">Место сделки</label>
                  <input
                    className="input_form"
                    value={dataApplication.place_of_transaction}
                    onChange={(e) =>
                      setDataApplication({
                        ...dataApplication,
                        place_of_transaction: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Введите адрес сделки"
                    required
                  />
                </div>
                <div style={{ height: 263 }} className="input_box">
                  <label className="label_form">
                    Условия сделки (
                    {dataApplication.terms_of_a_transaction.length} /до 500
                    символов)
                  </label>
                  <textarea
                    style={{ height: "100%" }}
                    className="input_form"
                    value={dataApplication.terms_of_a_transaction}
                    onChange={(e) =>
                      setDataApplication({
                        ...dataApplication,
                        terms_of_a_transaction: e.target.value,
                      })
                    }
                    type="text"
                    maxLength={500}
                    placeholder="Напишите несколько предложений о вашей компании"
                    required
                  />
                </div>
              </div>
            </div>
            <button style={{ marginTop: 20 }} className="button_form">
              Опубликовать
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostApplication;
