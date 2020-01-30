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

  //update form with inputs
  const updateForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log("form : ", form);
  };

  //submit infos on database on submit
  const submitForm = () => {
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
          nb_visitors: "",
          date_resa: ""
        });
      })
      .catch(function(error) {});
  };

  return (
    <div className="test">
      <div className="complete_title">
        <p>FORMULAIRE DE RESERVATION</p>
      </div>
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
        <select name="nb_visitors" onChange={updateForm}>
          <option value="">--Faites votre choix--</option>
          <option value="one">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="groupe">Groupe (+ 5 pers)</option>
        </select>
        <label for="artist-select">Date de la réservation</label>
        <input
          type="date"
          className="addUser-input"
          name="date_resa"
          onChange={updateForm}
        />
        <div className="complete_date">Prix total : </div>
        <button text="Valider" onClick={() => submitForm()}>
          Valider
        </button>
      </div>
    </div>
  );
};

export default Complete;
