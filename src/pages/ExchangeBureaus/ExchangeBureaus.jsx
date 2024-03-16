import React, { useState } from "react";
import "./ExchangeBureaus.css";
import map from "../../img/map.svg";
import number from "../../img/map.svg";
import search from "../../img/Search.svg";
import photo1 from "../../img/photo_2.svg";
import photo2 from "../../img/photo_3.svg";
import photo3 from "../../img/photo_4.svg";
import photo4 from "../../img/photo_5.svg";
import photo5 from "../../img/photo_6.svg";
import { useNavigate } from "react-router-dom";

const data = [
  {
    img: photo1,
    title: "MSC",
    address: "ул. Мичурина, 56",
    number: "(555) 155523 (555) 155523",
  },
  {
    img: photo2,
    title: "«Актан» Дордой",
    address: "ул. Мичурина, 56",
    number: "(555) 155523 (555) 155523",
  },
  {
    img: photo3,
    title: "Шумкар",
    address: "ул. Мичурина, 56",
    number: "(555) 155523 (555) 155523",
  },
  {
    img: photo4,
    title: "«Рашидик» Аламедин ОсОО «Рашидик» Аламедин ОсОО",
    address: "ул. Мичурина, 56",
    number: "(555) 155523 (555) 155523",
  },
  {
    img: photo5,
    title: "«Аю Гранд Комфорт»",
    address: "ул. Мичурина, 56",
    number: "(555) 155523 (555) 155523",
  },
];

const ExchangeBureaus = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  return (
    <div className="exchange_bureaus">
      <div className="bureaus_block">
        <div className="relative">
          <img className="search" src={search} alt="" />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Поиск обменных бюро"
          />
        </div>
        {data
          .filter((obj) => {
            return obj.title.toLowerCase().includes(value.toLowerCase());
          })
          .map((el) => (
            <div className="bureaus_box">
              <img src={el.img} alt="" />
              <div className="flex">
                <p
                  onClick={() => navigate(`/exchange-detail/${el.title}`)}
                  className="title"
                >
                  {el.title}
                </p>
                <div>
                  <p className="text">
                    <img className="icon" src={map} alt="" />
                    {el.address}
                  </p>
                  <p className="text">
                    <img className="icon" src={number} alt="" />
                    {el.number}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23393.532983213132!2d74.58659114999999!3d42.86879945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c1c213cdbb%3A0xef3be47fc5282df3!2sPodium!5e0!3m2!1sru!2skg!4v1710577683300!5m2!1sru!2skg"
          width={"100%"}
          height={"100%"}
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ExchangeBureaus;
