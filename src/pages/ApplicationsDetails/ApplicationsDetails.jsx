import React, { useState } from "react";
import "./ApplicationsDetails.css";
import { useParams } from "react-router-dom";
import phone from "../../img/phone.svg";
import user from "../../img/user.svg";
import Modal from "../../components/UI/Modal/Modal";

const ApplicationsDetails = () => {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [complaint, setComplaint] = useState({
    data: [
      { id: 1, text: "Мошенники" },
      { id: 2, text: "Недостоверная информация" },
      { id: 3, text: "Другое" },
    ],
    state: 0,
  });

  return (
    <div className="applications_details">
      <div className="container">
        <div className="white_block">
          <div className="between">
            <div className="flex">
              <img className="image" src={user} alt="" />
              <div>
                <p className="title">Асанбекова Нурзида</p>
                <div className="flex">
                  <p className="text">
                    {" "}
                    <img src={phone} alt="" /> ***********
                  </p>
                  <p className="text blue">Показать номер</p>
                </div>
              </div>
            </div>
            <div>
              <button onClick={() => setModal(true)} className="button_form">
                Пожаловаться
              </button>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="white_block">
            <h2>Информация</h2>
            <div style={{ gap: 14 }} className="column">
              <div className="between">
                <p className="text">Валюта</p>
                <div className="texting">Биткоин (BTC)</div>
              </div>
              <div className="between">
                <p className="text">Количество</p>
                <div className="texting">2</div>
              </div>
              <div className="between">
                <p className="text">По курсу</p>
                <div className="texting">64.11512</div>
              </div>
              <div className="between">
                <p className="text">Оплата</p>
                <div className="texting">Банковский перевод</div>
              </div>
              <div className="between">
                <p className="text">Место сделки</p>
                <div className="texting">г. Бишкек, ул. Тоголок Молдо 54/7</div>
              </div>
              <div className="between">
                <p className="text">Время</p>
                <div className="texting">12:30</div>
              </div>
            </div>
          </div>
          <div style={{ gap: 20 }} className="column">
            <div className="white_block">
              <h2>Вы получаете</h2>
              <div className="between">
                <p className="text">Сумма</p>
                <div className="texting_sum">
                  66115.18 <div className="valuta">KGS</div>{" "}
                </div>
              </div>
            </div>
            <div className="white_block">
              <h2>Условия сделки</h2>
              <p className="text">
                🚫No third party payment accepted. 🚫Do not make payment from
                scam money. ✅Please pay I'm online. Send me Receipt Name should
                be visible in receipt. 🚫Do not buy for any illegal activities.
                🚫I'm not responsible if you lose your valuable money for any
                scam scheme. 🚫 Please don’t write in Remarks any words like
                Crypto, Binance, USDT, BNB, ETH etc.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal setModal={setModal}>
          <h5>Пожаловаться</h5>
          <div className="array">
            {complaint.data.map((el) => (
              <div
                onClick={() => setComplaint({ ...complaint, state: el.id })}
                className="array_box"
              >
                <div
                  className={`state ${el.id === complaint.state && "active"}`}
                >
                  {el.id === complaint.state && <div className="circle"></div>}
                </div>
                <p className="text">{el.text}</p>
              </div>
            ))}
          </div>
          <button className="button_form">Отправить жалобу</button>
        </Modal>
      )}
    </div>
  );
};

export default ApplicationsDetails;
