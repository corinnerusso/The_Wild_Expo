import React from "react";
import "./table.css";

const Table = () => {
  return (
    <div className="table_general">
      <table>
        <thead>
          <tr>
            <td></td>
            <th>Adultes</th>
            <th>Enfants de -12 ans</th>
            <th>Groupes (plus de 10 personnes)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Tarifs</th>
            <td>10 €</td>
            <td>5 €</td>
            <td>25 €</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
