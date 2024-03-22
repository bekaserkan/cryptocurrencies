import React, { useState } from "react";
import "./Table.css";
import logo1 from "../../img/logo1.svg";
import logo2 from "../../img/logo2.svg";
import logo3 from "../../img/logo3.svg";
import star1 from "../../img/Component1.svg";
import star2 from "../../img/Component2.svg";
import logo_bank from "../../img/logo_bank.svg";
import phone from "../../img/phone.svg";
import map from "../../img/maping.svg";
import arrow from "../../img/icon_arrow.svg";

const data = [
  {
    title: "ОАО «Бакай банк»",
    img: logo_bank,
    phone: "(312) 610061",
    address: "ул. Мичурина, 56",
    datas: "66115.18",
    time: "12:30",
  },
  {
    title: "ОАО «Бакай банк»",
    img: logo_bank,
    phone: "(312) 610061",
    address: "ул. Мичурина, 56",
    datas: "66115.18",
    time: "12:30",
  },
  {
    title: "ОАО «Бакай банк»",
    img: logo_bank,
    phone: "(312) 610061",
    address: "ул. Мичурина, 56",
    datas: "66115.18",
    time: "12:30",
  },
  {
    title: "ОАО «Бакай банк»",
    img: logo_bank,
    phone: "(312) 610061",
    address: "ул. Мичурина, 56",
    datas: "66115.18",
    time: "12:30",
  },
  {
    title: "ОАО «Бакай банк»",
    img: logo_bank,
    phone: "(312) 610061",
    address: "ул. Мичурина, 56",
    datas: "66115.18",
    time: "12:30",
  },
  {
    title: "ОАО «Бакай банк»",
    img: logo_bank,
    phone: "(312) 610061",
    address: "ул. Мичурина, 56",
    datas: "66115.18",
    time: "12:30",
  },
  {
    title: "ОАО «Бакай банк»",
    img: logo_bank,
    phone: "(312) 610061",
    address: "ул. Мичурина, 56",
    datas: "66115.18",
    time: "12:30",
  },
  {
    title: "ОАО «Бакай банк»",
    img: logo_bank,
    phone: "(312) 610061",
    address: "ул. Мичурина, 56",
    datas: "66115.18",
    time: "12:30",
  },
];

const Table = ({ title }) => {
  const [star, setStar] = useState(false);

  return (
    <div style={title && { margin: 0 }} className="table">
      <div className="container">
        {title ? (
          ""
        ) : (
          <div>
            <h2 className="title_h1">
              Курсы криптовалюты на сегодня в Бишкеке
              <div className="box_text">на 07.03.2024</div>
            </h2>
            <p className="text_p">
              Курсы криптовалюты обновляются {" "}
              <a href="/" className="link">
                обменными пунктами
              </a>
              . коммерческие банки Кыргызстана обновляют курс
              криптовалюты каждые 5 минут
            </p>
          </div>
        )}
        <div className="head_grid">
          <div>
            <p className="gray"># Название</p>
          </div>
          <div className="box">
            <div className="flex">
              <img src={logo1} alt="" />
              <p className="title">BTC</p>
            </div>
            <div className="grid_col">
              <p className="gray">покупка</p>
              <p className="gray">продажа</p>
            </div>
          </div>
          <div className="box">
            <div className="flex">
              <img src={logo2} alt="" />
              <p className="title">ETH</p>
            </div>
            <div className="grid_col">
              <p className="gray">покупка</p>
              <p className="gray">продажа</p>
            </div>
          </div>
          <div className="box">
            <div className="flex">
              <img src={logo3} alt="" />
              <p className="title">SOL</p>
            </div>
            <div className="grid_col">
              <p className="gray">покупка</p>
              <p className="gray">продажа</p>
            </div>
          </div>
          <div className="col">
            {" "}
            <img className="arrow" src={arrow} alt="" />
            <div>
              <p className="gray">время</p>
            </div>
          </div>
        </div>
        <div className="blocks">
          {data.slice(0, 20).map((el, index) => (
            <div key={index} className="grid">
              <div className="save">
                <img
                  onClick={() => setStar(!star)}
                  className="star"
                  src={star ? star1 : star2}
                  alt=""
                />
                <p className="number">{index + 1}</p>
                <div className="carob">
                  <img src={el.img} alt="" />
                  <div>
                    <p className="title">{el.title}</p>
                    <div className="gray_texts">
                      <p className="gray">
                        {" "}
                        <img className="icon" src={phone} alt="" />
                        {el.phone}
                      </p>
                      <p className="gray">
                        {" "}
                        <img className="icon" src={map} alt="" /> {el.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="chet">{el.datas}</p>
              </div>
              <div>
                <p className="chet">{el.datas}</p>
              </div>
              <div>
                <p className="chet">{el.datas}</p>
              </div>
              <div>
                <p className="chet">{el.datas}</p>
              </div>
              <div>
                <p className="chet">{el.datas}</p>
              </div>
              <div>
                <p className="chet">{el.datas}</p>
              </div>
              <div>
                <p className="time">{el.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
