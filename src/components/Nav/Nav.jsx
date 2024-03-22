import React, { useEffect, useState } from "react";
import "./Nav.css";
import banner from "../../img/banner.svg";
import rec from "../../img/rec.svg";
import logo1 from "../../img/logo1.svg";
import logo2 from "../../img/logo2.svg";
import logo3 from "../../img/logo3.svg";
import logo4 from "../../img/logo4.svg";
import logo5 from "../../img/logo5.svg";
import logo6 from "../../img/logo6.svg";
import arrow from "../../img/arrow_red.svg";
import { api } from "../../Api";
import { useNavigate } from "react-router-dom";

const datas = [
  {
    img: logo1,
    name: "BTC",
    number: 66115.18,
  },
  {
    img: logo2,
    name: "ETH",
    number: 3775.5,
  },
  {
    img: logo3,
    name: "SOL",
    number: 139.26,
  },
  {
    img: logo4,
    name: "USDT",
    number: 1,
  },
  {
    img: logo5,
    name: "BNB",
    number: 428.62,
  },
  {
    img: logo6,
    name: "ZRP",
    number: 139.26,
  },
];

const Nav = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     api
  //       .get("get")
  //       .then((response) => {
  //         setData(response.data);
  //       })
  //       .then((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  return (
    <div className="nav">
      <div className="container">
        <img className="banner" src={banner} alt="" />
        <div className="nav_main">
          <div>
            <div className="nav_box">
              <div></div>
              <div>
                <p className="title">Средний курс</p>
                <p className="text">за последние 2 часа</p>
              </div>
              <div>
                <p className="title">Лучший курс</p>
                <p className="text">по участникам</p>
              </div>
              <div className="last">
                <p className="title">Курс Binance</p>
                <a className="link" href="/" target="blank">
                  все курсы
                </a>
              </div>
            </div>
            <div className="buy_sell">
              <div></div>
              <div>
                <p>покупка</p>
              </div>
              <div>
                <p>продажа</p>
              </div>
              <div>
                <p>покупка</p>
              </div>
              <div>
                <p>продажа</p>
              </div>
              <div className="last">
                <p>продажа</p>
              </div>
            </div>
            {datas.map((el, id) => (
              <div key={id} className="nav_box_s">
                <div
                  onClick={() => navigate(`page-coin/${id}`)}
                  className="first"
                >
                  <img src={el.img} alt="" />
                  <p className="name">{el.name}</p>
                </div>
                <div>
                  <p className="number">{el.number}</p>
                </div>
                <div>
                  <p className="number">{el.number}</p>
                </div>
                <div>
                  <p className="number blue">{el.number}</p>
                </div>
                <div>
                  <p className="number blue">{el.number}</p>
                </div>
                <div className="last_s">
                  <p className="number">{el.number}</p>{" "}
                  <img src={arrow} alt="" />
                </div>
              </div>
            ))}
          </div>
          <img src={rec} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
