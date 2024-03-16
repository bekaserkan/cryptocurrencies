import React, { useEffect, useState } from "react";
import "./History.css";
import Change from "../../components/Change/Change";

const History = () => {
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
    <div className="history">
      <div className="container">
        <div style={{ marginTop: 30 }}>
          <h1 className="title_h1">Архив валют</h1>
        </div>
      </div>
      <Change state={state} none={true} />
    </div>
  );
};

export default History;
