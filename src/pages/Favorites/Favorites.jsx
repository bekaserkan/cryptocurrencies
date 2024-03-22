import React from "react";
import "./Favorites.css";
import Table from "../../components/Table/Table";

const Favorites = () => {
  return (
    <div className="favorites">
      <div className="container">
        <h1>Избранное</h1>
      </div>
      <Table title={true} />
    </div>
  );
};

export default Favorites;
