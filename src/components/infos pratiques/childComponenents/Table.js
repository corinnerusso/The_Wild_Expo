import React from "react";
import "./table.css";

const Table = () => {
  return (
    <div className="table_general">
      <h1 className="table_title">NOS TARIFS</h1>
      <div className="table_prices">
        <div className="table_info">
          <p>Adultes</p>
          <p>10 €</p>
        </div>
        <div className="table_info">
          <p>Enfants -12 ans</p>
          <p> 5 €</p>
        </div>
        <div className="table_info">
          <p>Tarif Groupe</p>
          <p>A partir de 5 personnes</p>
          <p>25 €</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
