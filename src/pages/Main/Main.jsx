import React, { useEffect, useState } from "react";
import "./Main.css";
import Nav from "../../components/Nav/Nav";
import Course from "../../components/Course/Course";
import Applications from "../../components/Applications/Applications";
import Сalculator from "../../components/Сalculator/Сalculator";
import MainNews from "../../components/MainNews/MainNews";
import Change from "../../components/Change/Change";
import Table from "../../components/Table/Table";

const Main = () => {
  const [state, setState] = useState();

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

  return (
    <div className="main">
      <Nav />
      <Course />
      <Table />
      <Applications />
      <Сalculator />
      <MainNews />
      <Change state={state} />
    </div>
  );
};

export default Main;
