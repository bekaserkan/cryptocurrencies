import React, { useState } from "react";
import "./AddCoin.css";
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

const AddCoin = () => {
  const [btcCoin, setBtcCoin] = useState("BTC Биткоин");
  const [dataCoin, setDataCoin] = useState({
    cryptocurrency: btcCoin,
    buy: "",
    sell: "",
    taimer: "",
    time: "",
  });
  const navigate = useNavigate();

  return (
    <div className="add_coin">
      <div className="container">
        <img
          onClick={() => navigate(-1)}
          className="back"
          src={arrows}
          alt=""
        />
        <div className="white_block">
          <h5>Добавить новую валюту</h5>
          <form style={{ width: 500 }} className="form_password">
            <div className="input_box">
              <label className="label_form">Криптовалюта</label>
              <InputComponent
                value={btcCoin}
                setValue={setBtcCoin}
                data={btc_data}
                width={"100%"}
              />
            </div>
            <div className="input_box">
              <label className="label_form">Покупка</label>
              <input
                className="input_form"
                value={dataCoin.buy}
                onChange={(e) =>
                  setDataCoin({ ...dataCoin, buy: e.target.value })
                }
                type="number"
                placeholder="Введите курс покупки валюты"
                required
              />
            </div>
            <div className="input_box">
              <label className="label_form">Продажа</label>
              <input
                className="input_form"
                value={dataCoin.sell}
                onChange={(e) =>
                  setDataCoin({ ...dataCoin, sell: e.target.value })
                }
                type="number"
                placeholder="Введите курс продажи валюты"
                required
              />
            </div>
            <div style={{ margin: 0 }} className="grid">
              <div className="input_box">
                <label className="label_form">Таймер до (дата)</label>
                <input
                  className="input_form"
                  value={dataCoin.taimer}
                  onChange={(e) =>
                    setDataCoin({ ...dataCoin, taimer: e.target.value })
                  }
                  type="date"
                  required
                />
              </div>
              <div className="input_box">
                <label className="label_form">Таймер до (время)</label>
                <input
                  className="input_form"
                  value={dataCoin.time}
                  onChange={(e) =>
                    setDataCoin({ ...dataCoin, time: e.target.value })
                  }
                  type="time"
                  required
                />
              </div>
            </div>
            <button style={{ marginTop: 20 }} className="button_form">
              Добавить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoin;
