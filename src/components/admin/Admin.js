import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./../pincipal/childComponents/NavBar";
import Footer from "./../pincipal/childComponents/Footer";

import "./admin.css";

const Admin = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/posts`)
      .then(res => res.data)
      .then(data => setUser(data));
  }, []);

  return (
    <div>
      <Navbar />
      <p className="admin_title">RESERVATIONS</p>
      <div className="admin_card">
        <div className="admin_test">
          {user.map(visitor => (
            <div className="admin_admin">
              <p>Date : {visitor.date_resa.substring(0, 10)}</p>
              <p>
                {visitor.firstname} {visitor.lastname}
              </p>
              <br />
              <p>Nb d'adultes : {visitor.nb_visitors}</p>
              <p>Nb d'enfants : {visitor.nb_children}</p>
              <p>{visitor.email}</p>
              <p>Prix à payer : {visitor.price_to_pay} €</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
