import React from "react";
import NavBar from "./../../pincipal/childComponents/NavBar";
import Footer from "./../../pincipal/childComponents/Footer";
import daleast_portrait from "./../../../style/assets/daleast_portrait.jpg";
import daleast_pic1 from "./../../../style/assets/daleast_pic1.jpg";
import daleast_pic2 from "./../../../style/assets/daleast_pic2.jpg";

const DaleastPage = () => {
  return (
    <div>
      <NavBar />
      <h1>Daleast</h1>
      <div className="artist_all">
        <div className="artist_photo_and_desc">
          <img
            src={daleast_portrait}
            alt="picture of Amo Art artist"
            className="artist_pic"
          />

          <div className="artist_blabla">
            <div>
              <p>
                Né en 1984 en Chine, DALeast est un personnage atypique qui aime
                entretenir le mystère quant à sa véritable identité. Dès l’âge
                de trois ans, il joue à créer : peinture, sculpture,
                installations, performances synchronisées, art numérique… Il
                embrasse l’art urbain en 2004 et commence alors à voyager à
                travers les continents pour laisser sa signature sur l’immensité
                des murs de béton.
              </p>
            </div>
            <div>
              <div className="amo_exemples">
                <img src={daleast_pic1} alt="elephant" className="amo_ex" />
                <img src={daleast_pic2} alt="fox" className="amo_ex" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DaleastPage;
