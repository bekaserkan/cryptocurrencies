import React from "react";
import "./MainNews.css";
import image_new1 from "../../img/photo_news1.svg";
import image_new2 from "../../img/photo_news2.svg";
import image_new3 from "../../img/photo_news3.svg";
import image_new4 from "../../img/photo_news4.svg";
import image_new5 from "../../img/photo_news5.svg";
import image_new6 from "../../img/photo_news6.svg";
import { useNavigate } from "react-router-dom";

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
  {
    img: image_new5,
    title: "Условия по картам Visa в банках Кыргызстана",
    text: "На портал Banks.kg поступают запросы о картах Visa. Для наших пользователей подготовлена информация о категориях карт Visa, сроках их изготовления, стоимости выпуска и обслуживания, тарифах и привилегиях в банках КР.",
    date: "8 марта, 2024",
    link: "Banks.kg",
  },
  {
    img: image_new6,
    title: "Условия по картам Visa в банках Кыргызстана",
    text: "На портал Banks.kg поступают запросы о картах Visa. Для наших пользователей подготовлена информация о категориях карт Visa, сроках их изготовления, стоимости выпуска и обслуживания, тарифах и привилегиях в банках КР.",
    date: "8 марта, 2024",
    link: "Banks.kg",
  },
];

const MainNews = () => {
  const navigate = useNavigate();
  return (
    <div className="main_news">
      <div className="container">
        <div>
          <h2 className="title_h1">Финансовые новости</h2>
          <p className="text_p">
            Курсы криптовалют, новости банков, новости экономики
          </p>
        </div>
        <div className="main_news_block">
          {data.map((el) => (
            <div className="main_news_box">
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
        <button onClick={() => navigate("/news")} className="button_form news">
          Все новости
        </button>
      </div>
    </div>
  );
};

export default MainNews;
