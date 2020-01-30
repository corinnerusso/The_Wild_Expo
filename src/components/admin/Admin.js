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
            <div>
              <p>
                {visitor.firstname} {visitor.lastname}
              </p>
              <p>{visitor.date_resa}</p>
              <p>Nombre de visiteurs {visitor.nb_visitors}</p>
              <p>{visitor.email}</p>
              <p>prix : {visitor.price_to_pay} €</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
