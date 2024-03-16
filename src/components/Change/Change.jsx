import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./Change.css";
import ChartLoader from "../UI/ChartLoader/ChartLoader";

const Change = ({ state, none }) => {
  const [isChartsLoaded, setChartsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setChartsLoaded(true);
    };

    fetchData();
  }, []);

  return (
    <div style={{ marginTop: none ? 30 : 130 }} className="change">
      <div className="container">
        <div>
          <h2 style={{ fontSize: none ? 24 : 30 }} className="title_h1">
            Изменение курсов криптовалюты в Бишкеке{" "}
            {none ? "" : <div className="box_text">на сегодня</div>}{" "}
          </h2>
          <p className="text_p">
            Для того, чтобы получить больше информации о изменениях курсов валют
            Вы можете просмотреть наш{" "}
            <a href="/" target="blank" className="link">
              Архив
            </a>{" "}
            .
          </p>
        </div>
        <div className="change_block">
          <div className="category">
            <div className="category_box active">BTC</div>
            <div className="category_box">ETH</div>
            <div className="category_box">BNB</div>
            <div className="category_box">SOL</div>
            <div className="category_box">XRP</div>
            <div className="category_box">USDT</div>
          </div>
          <div className="chart">
            <div className="stacks_block">
              {isChartsLoaded ? (
                <Chart
                  options={state?.options}
                  series={state?.series}
                  type="line"
                  width={"100%"}
                  height={400}
                />
              ) : (
                <div className="not_chart">
                  <ChartLoader />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Change;
