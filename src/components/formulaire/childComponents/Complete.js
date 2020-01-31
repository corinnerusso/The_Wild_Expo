import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

import "./complete.css";

const Complete = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    nb_visitors: 0,
    date_resa: "",
    nb_children: 0,
    price_to_pay: 0
  });

  //update form with inputs
  const updateForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log("form : ", form);
  };

  const handleTotal = () => {
    let total = 0;

    if (form.nb_visitors || form.nb_children) {
      total = form.nb_visitors * 10 + form.nb_children * 5;
    }
    if (form.nb_visitors === "group") {
      total = 25;
    }

    return total;
  };

  ///MODAL
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //submit infos on database on submit
  const submitForm = () => {
    axios
      .post(`http://localhost:5000/api/posts`, {
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        nb_visitors: form.nb_visitors,
        date_resa: form.date_resa,
        nb_children: form.nb_children,
        price_to_pay: handleTotal()
      })
      .then(function(response) {
        setForm({
          firstname: "",
          lastname: "",
          email: "",
          nb_visitors: "",
          date_resa: "",
          nb_children: "",
          price_to_pay: ""
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
          className="addUser-input"
          type="text"
          name="lastname"
          placeholder="NOM"
          onChange={updateForm}
        />
        {/* prénom */}
        <input
          className="addUser-input"
          type="text"
          name="firstname"
          placeholder="Prénom"
          onChange={updateForm}
        />
        {/* email */}
        <input
          className="addUser-input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={updateForm}
        />
        <label for="place-select">Nombre de places adultes</label>
        <select name="nb_visitors" onChange={updateForm}>
          <option value="">--Faites votre choix--</option>
          <option value="one">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="group">5 personnes et plus</option>
        </select>

        <label for="place-select">Nombre de places enfants</label>
        <select name="nb_children" onChange={updateForm}>
          <option value="">--Faites votre choix--</option>
          <option value="one">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <label for="artist-select">Date de la réservation</label>
        <input
          type="date"
          className="addUser-input"
          name="date_resa"
          onChange={updateForm}
        />
        <div className="complete_date">Total : {handleTotal()} € </div>
        <Modal
          isOpen={modalIsOpen}
          contentLabel="Réservation ok"
          onRequestClose={closeModal}
          className="ReactModal__Overlay"
          id="modal"
        >
          <div className="modal_div">
            <p className="modal_close" onClick={() => closeModal()}>
              x
            </p>
            <p className="modal_p"> VOTRE RESERVATION EST VALIDEE</p>
          </div>
        </Modal>
        <button
          text="Valider"
          onClick={e => {
            submitForm();
            openModal();
          }}
        >
          Valider
        </button>
      </div>
    </div>
  );
};

export default Complete;
