import React, { useEffect, useState } from "react";
import "./PageCoin.css";
import image_new1 from "../../img/photo_news1.svg";
import image_new2 from "../../img/photo_news2.svg";
import image_new3 from "../../img/photo_news3.svg";
import image_new4 from "../../img/photo_news4.svg";
import btc from "../../img/logo1.svg";
import star1 from "../../img/Component1.svg";
import star2 from "../../img/Component2.svg";
import { useNavigate, useParams } from "react-router-dom";
import Chart from "react-apexcharts";
import ChartLoader from "../../components/UI/ChartLoader/ChartLoader";
import arrow_red from "../../img/arrow_red.svg";
import arrow_green from "../../img/green_arrow.svg";
import { IoIosArrowDown } from "react-icons/io";
import facebook from "../../img/link (1).svg";
import twitter from "../../img/link.svg";
import copy_icon from "../../img/copy.svg";
import fire from "../../img/fire.svg";
import fu from "../../img/fu.svg";

const data = [
  {
    img: image_new1,
    title: "Условия по картам Visa в банках Кыргызстана",
    text: "На портал Banks.kg поступают запросы о картах Visa. Для наших пользователей подготовлена информация о категориях карт Visa, сроках их изготовления, стоимости выпуска и обслуживания, тарифах и привилегиях в банках КР.",
    date: "8 марта, 2024",
    link: "Banks.kg",
  },
  {
    img: image_new2,
    title:
      "Региональное подразделение Visa, включающее Кыргызстан, возглавил Кристина Дорош",
    text: "На портал Banks.kg поступают запросы о картах Visa. Для наших пользователей подготовлена информация о категориях карт Visa, сроках их изготовления, стоимости выпуска и обслуживания, тарифах и привилегиях в банках КР.",
    date: "8 марта, 2024",
    link: "Banks.kg",
  },
  {
    img: image_new3,
    title: "Условия по картам Visa в банках Кыргызстана",
    text: "На портал Banks.kg поступают запросы о картах Visa. Для наших пользователей подготовлена информация о категориях карт Visa, сроках их изготовления, стоимости выпуска и обслуживания, тарифах и привилегиях в банках КР.",
    date: "8 марта, 2024",
    link: "Banks.kg",
  },
  {
    img: image_new4,
    title: "На каких условиях работают МФК и МКК в Кыргызстане?",
    text: "На портал Banks.kg поступают запросы о картах Visa. Для наших пользователей подготовлена информация о категориях карт Visa, сроках их изготовления, стоимости выпуска и обслуживания, тарифах и привилегиях в банках КР.",
    date: "8 марта, 2024",
    link: "Banks.kg",
  },
];

const questions = [
  {
    question: "Что такое Bitcoin? (BTC)",
    answer:
      "Bitcoin - это криптовалюта и глобальная платежная система. Он является первой децентрализованной цифровой валютой, работающей без центрального участника или единого администратора.",
  },
  {
    question: "Как работает технология блокчейн?",
    answer:
      "Блокчейн - это децентрализованная база данных, где данные хранятся в виде связанных блоков. Каждый блок содержит набор транзакций, которые подтверждаются сетью участников (майнеров), и хранится в хронологическом порядке.",
  },
  {
    question: "Как безопасен Bitcoin?",
    answer:
      "Безопасность Bitcoin обеспечивается криптографическими методами, в частности, с использованием хэш-функций и цифровых подписей. Транзакции на блокчейне проверяются и подтверждаются сетью участников, что делает их неизменяемыми и надежными.",
  },
];

const PageCoin = () => {
  const { id } = useParams();
  const [state, setState] = useState();
  const [view, setView] = useState(true);
  const [news, setNews] = useState(false);
  const [isChartsLoaded, setChartsLoaded] = useState(false);
  const [star, setStar] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    setState({
      options: {
        chart: {
          id: "basic-bar",
          type: "area",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#EE0404"],
      },
      series: [
        {
          name: "",
          data: [700, 850, 0, 750, 760, 950, 470, 650, 720, 260],
        },
      ],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      stroke: {
        curve: "straight",
      },
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
    <div className="page_coin">
      <div className="container">
        <div className="coin_block">
          <div className="one">
            <div className="coin_box">
              <div className="between">
                <div className="flex">
                  <img src={btc} alt="" />
                  <p className="title">Биткоин</p>
                </div>
                <div className="flex">
                  <p className="text g">245</p>
                  <img
                    onClick={() => setStar(!star)}
                    className="star"
                    src={star ? star1 : star2}
                    alt=""
                  />
                </div>
              </div>
              <div className="price_block">
                <p className="price">66 630,79 $</p>
                <p className="red_text">
                  {" "}
                  <img src={arrow_red} alt="" /> 0,9%
                </p>
              </div>

              <div className="save_block">
                <div className="flex">
                  <p className="text g">1,0000 BTC</p>
                  <p className="green_text">
                    <img src={arrow_green} alt="" /> 0,0%
                  </p>
                </div>
                <div className="pris">
                  <div style={{ width: `${80}%` }} className="renge"></div>
                </div>
                <div className="between">
                  <p className="bold">60 861.22 $</p>
                  <p className="bold">за 24 часа</p>
                  <p className="bold">68 912,84 $</p>
                </div>
              </div>
            </div>
            <div className="coin_box">
              <h3>Информация</h3>
              <div className="column">
                <div className="between">
                  <p className="text">Веб-сайт</p>
                  <div className="flex">
                    <div className="texting">bitcoin.org</div>
                    <div className="texting">whitepaper</div>
                  </div>
                </div>
                <div className="between">
                  <p className="text">Обозреватели</p>
                  <div className="flex">
                    <div className="texting">bitcoin.org</div>
                    <div className="texting">
                      Mempool <IoIosArrowDown className="icon" />{" "}
                    </div>
                  </div>
                </div>
                <div className="between">
                  <p className="text">Кошельки</p>
                  <div className="flex">
                    <div className="texting">bitcoin.org</div>
                    <div className="texting">
                      Ledger <IoIosArrowDown className="icon" />{" "}
                    </div>
                  </div>
                </div>
                <div className="between">
                  <p className="text">Сообщество</p>
                  <div className="flex">
                    <img className="flexbox" src={facebook} alt="" />
                    <img className="flexbox" src={twitter} alt="" />
                    <div className="texting">bitcointalk.org</div>
                  </div>
                </div>
                <div className="between">
                  <p className="text">Поиск на платформах</p>
                  <div className="flex">
                    <img className="flexbox" src={twitter} alt="" />
                  </div>
                </div>
                <div className="between">
                  <p className="text">Исходный код</p>
                  <div className="flex">
                    <div className="texting">Github</div>
                  </div>
                </div>
                <div className="between">
                  <p className="text">Идентификатор API</p>
                  <div className="flex">
                    <div className="texting">
                      Bitcoin <img className="icon" src={copy_icon} alt="" />{" "}
                    </div>
                  </div>
                </div>
                <div className="between">
                  <p className="text">Категории</p>
                  <div className="flex">
                    <div className="texting">Криптовалюта</div>
                    <div className="texting">
                      еще 3 <IoIosArrowDown className="icon" />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="coin_box">
              <h3>Какой ваш прогноз по BTC сегодня?</h3>
              <p className="desc">
                Сегодня сообщество оптимистичного настроено в отношении Биткоин
                (BTC).
              </p>
              <div className="grid">
                <div className="image_emoji">
                  <img src={fire} alt="" />
                  82%
                </div>
                <div className="image_emoji">
                  <img src={fu} alt="" />
                  82%
                </div>
              </div>
            </div>
          </div>
          <div className="two">
            <div className="coin_box">
              <div className="btns">
                <button
                  onClick={() => {
                    setView(true);
                    setNews(false);
                  }}
                  className={`btn ${view && "active"}`}
                >
                  Обзор
                </button>
                <button
                  onClick={() => {
                    setView(false);
                    setNews(true);
                  }}
                  className={`btn ${news && "active"}`}
                >
                  Новости
                </button>
              </div>
              {isChartsLoaded ? (
                <div>
                  <Chart
                    options={state?.options}
                    series={state?.series}
                    type="area"
                    width={"100%"}
                    height={200}
                  />
                </div>
              ) : (
                <div className="not_chart">
                  <ChartLoader />
                </div>
              )}
            </div>
            <div className="coin_box">
              <h3>Вопросы-ответы</h3>
              <div className="accordion_container">
                {questions.map((item, index) => (
                  <div key={index} className="coin_box_accordion">
                    <div
                      onClick={() => toggleAccordion(index)}
                      className="between acc"
                    >
                      <h4>{item.question}</h4>
                      <IoIosArrowDown className="icon" />
                    </div>

                    <div
                      className={`accordion ${
                        activeIndex === index ? "open" : ""
                      }`}
                    >
                      <p className="acc_text">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="news">
          <h2>Биткоин - последние новости</h2>
          <div className="news_block">
            {data.map((el, index) => (
              <div
                key={index}
                onClick={() => navigate(`/news-datail/${index}`)}
                className="news_box"
              >
                <img src={el.img} alt="" />
                <div className="flex">
                  <p className="title">{el.title}</p>
                  <div>
                    <p className="text">{el.text}</p>
                    <div className="date_and_link">
                      <p className="date">{el.date}</p>
                      <a href="/" target="blank" className="link">
                        {el.link}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCoin;
