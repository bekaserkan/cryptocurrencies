import React, { useEffect, useState } from "react";
import "./ExchangeDetail.css";
import { NavLink, useParams } from "react-router-dom";
import map from "../../img/map.svg";
import number from "../../img/map.svg";
import photo1 from "../../img/photo_2.svg";
import star from "../../img/component.svg";
import eye from "../../img/eyes.svg";
import logo1 from "../../img/logo1.svg";
import logo2 from "../../img/logo2.svg";
import logo3 from "../../img/logo3.svg";
import logo4 from "../../img/logo4.svg";
import logo5 from "../../img/logo5.svg";
import logo6 from "../../img/logo6.svg";
import ChartLoader from "../../components/UI/ChartLoader/ChartLoader";
import Chart from "react-apexcharts";

const datas = [
  {
    img: logo1,
    name: "Bitcoin BTC",
    number: 66115.18,
    date: "12:30/12.03.24",
  },
  {
    img: logo2,
    name: "Etherium ETH",
    number: 3775.5,
    date: "12:30/12.03.24",
  },
  {
    img: logo3,
    name: "Solana SOL",
    number: 139.26,
    date: "12:30/12.03.24",
  },
  {
    img: logo4,
    name: "Tether USDT",
    number: 1,
    date: "12:30/12.03.24",
  },
  {
    img: logo5,
    name: "Binance BNB",
    number: 428.62,
    date: "12:30/12.03.24",
  },
  {
    img: logo6,
    name: "Ripple ZRP",
    number: 139.26,
    date: "12:30/12.03.24",
  },
];

const ExchangeDetail = () => {
  const [auth, setAuth] = useState(false);
  const { id } = useParams();
  const [state, setState] = useState();
  const [isChartsLoaded, setChartsLoaded] = useState(false);

  useEffect(() => {
    setState({
      options: {
        chart: {
          id: "basic-bar",
        },
      },
      series: [
        {
          name: "Покупка",
          data: [700, 850, 0, 750, 760, 950, 470, 650, 720, 260],
        },
        {
          name: "Продажа",
          data: [150, 750, 450, 490, 260, 650, 100, 920, 230, 100],
        },
      ],
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setChartsLoaded(true);
    };

    fetchData();
  }, []);

  return (
    <div className="exchange_detail">
      <div className="container">
        <div className="exchange_detail_block_one">
          <div className="detail">
            <div>
              <img className="image" src={photo1} alt="" />
              <p className="title">MSC</p>
              <p className="text">
                <img className="icon" src={map} alt="" />
                ул. Мичурина, 56
              </p>
              <p className="text">
                <img className="icon" src={number} alt="" />
                (555) 155523 (555) 155523
              </p>
            </div>
            <div className="between">
              <p className="star">
                <img className="icon" src={star} alt="" /> Лицензия НБКР №5708
              </p>
              <p className="star">
                <img className="icon" src={eye} alt="" />
                234
              </p>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23393.532983213132!2d74.58659114999999!3d42.86879945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c1c213cdbb%3A0xef3be47fc5282df3!2sPodium!5e0!3m2!1sru!2skg!4v1710577683300!5m2!1sru!2skg"
              width={"100%"}
              height={"100%"}
              style={{ border: 0, borderRadius: 20 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="exchange_detail_block_two">
          <div className="detail_block">
            <p className="block_title">Установленные курсы</p>
            <div className="detail_box">
              <div></div>
              <p className="name">покупка</p>
              <p className="name">продажа</p>
              <p className="name">время</p>
            </div>
            {datas.map((el) => (
              <div className="detail_box">
                <div className="items">
                  <img src={el.img} alt="" />
                  <p className="btc">{el.name}</p>
                </div>
                <p className="big_text">{el.number}</p>
                <p className="big_text">{el.number}</p>
                <p className="date">{el.date}</p>
              </div>
            ))}
          </div>
          <div className="detail_block">
            <p className="block_title">Активные объявления</p>
            {auth ? (
              ""
            ) : (
              <div className="div_auth">
                <p className="text">
                  Необходимо зарегистрироваться, чтобы участвовать в сделках по
                  криптовалюте
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
        <h3>Динамика изменения курсов криптовалют в MSC</h3>
        <div className="block_save">
          <div className="stacks_block">
            {isChartsLoaded ? (
              <div>
                <h4>
                  <img src={logo1} alt="" /> Bitcoin BTC
                </h4>
                <Chart
                  options={state?.options}
                  series={state?.series}
                  type="line"
                  width={"100%"}
                  height={400}
                />
              </div>
            ) : (
              <div className="not_chart">
                <ChartLoader />
              </div>
            )}
          </div>
          <div className="stacks_block">
            {isChartsLoaded ? (
              <div>
                <h4>
                  <img src={logo2} alt="" /> Etherium ETH
                </h4>
                <Chart
                  options={state?.options}
                  series={state?.series}
                  type="line"
                  width={"100%"}
                  height={400}
                />
              </div>
            ) : (
              <div className="not_chart">
                <ChartLoader />
              </div>
            )}
          </div>
          <div className="stacks_block">
            {isChartsLoaded ? (
              <div>
                <h4>
                  <img src={logo3} alt="" /> Solana SOL
                </h4>
                <Chart
                  options={state?.options}
                  series={state?.series}
                  type="line"
                  width={"100%"}
                  height={400}
                />
              </div>
            ) : (
              <div className="not_chart">
                <ChartLoader />
              </div>
            )}
          </div>
          <div className="stacks_block">
            {isChartsLoaded ? (
              <div>
                <h4>
                  <img src={logo4} alt="" /> Tether USDT
                </h4>
                <Chart
                  options={state?.options}
                  series={state?.series}
                  type="line"
                  width={"100%"}
                  height={400}
                />
              </div>
            ) : (
              <div className="not_chart">
                <ChartLoader />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeDetail;
