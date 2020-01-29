import React from "react";

import "./complete.css";

const Complete = () => {
  return (
    <div>
      <h1>FORMULAIRE DE RESERVATION</h1>

      <div className="form_inputs">
        {/* nom */}
        <input
          // ref={inputEl}
          className="addUser-input"
          type="text"
          name="lastname"
          placeholder="NOM"
          // onChange={updateForm}
        />
        {/* prénom */}
        <input
          // ref={inputElaa}
          className="addUser-input"
          type="text"
          name="firstname"
          placeholder="Prénom"
          // onChange={updateForm}
        />
        {/* licence */}
        <input
          // ref={inputElbb}
          className="addUser-input"
          type="text"
          name="email"
          placeholder="Email"
          // onChange={updateForm}
        />
        <label for="place-select">Nombre de places</label>
        <select>
          <option value="">--Faites votre choix--</option>
          <option value="one">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="groupe">Groupe (+ 10 pers)</option>
        </select>
        <label for="artist-select">Nombre de places</label>
        <select>
          <option value="">--Votez pour votre artiste préféré--</option>
          <option value="Amo">Amo Art</option>
          <option value="2">Daleast</option>
          <option value="3">Marko 93</option>
        </select>
      </div>
    </div>
  );
};

export default Complete;
