import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import "./complete.css";

const Complete = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    nb_visitors: "",
    date_resa: ""
  });
  //popup
  const [popupNewPlayer, setPopupNewPlayer] = useState(false);

  //update form with inputs
  const updateForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log("form : ", form);
  };

  //submit infos on database on submit
  const submitForm = () => {
    console.log("form : ", form);

    axios
      .post(`http://localhost:5000/api/posts`, {
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        nb_visitors: form.nb_visitors,
        date_resa: form.date_resa
      })
      .then(function(response) {
        setForm({
          firstname: "",
          lastname: "",
          email: "",
          nb_places: "",
          date: ""
        });
      })
      .catch(function(error) {});
  };
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
          onChange={updateForm}
        />
        {/* prénom */}
        <input
          // ref={inputElaa}
          className="addUser-input"
          type="text"
          name="firstname"
          placeholder="Prénom"
          onChange={updateForm}
        />
        {/* email */}
        <input
          // ref={inputElbb}
          className="addUser-input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={updateForm}
        />
        <label for="place-select">Nombre de places</label>
        <select name="nb_places" onChange={updateForm}>
          <option value="">--Faites votre choix--</option>
          <option value="one">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="groupe">Groupe (+ 10 pers)</option>
        </select>
        <label for="artist-select">Nombre de places</label>
        <input
          type="date"
          className="addUser-input"
          name="date"
          onChange={updateForm}
        />
        <p>prix total : </p>
        <button text="Valider" addOnClick={() => submitForm()}>
          Valider
        </button>
      </div>
    </div>
  );
};

export default Complete;
