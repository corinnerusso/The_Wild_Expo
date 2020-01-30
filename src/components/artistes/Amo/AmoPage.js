import React from "react";
import NavBar from "./../../pincipal/childComponents/NavBar";
import Footer from "./../../pincipal/childComponents/Footer";
import amo_portrait from "./../../../style/assets/amo_portrait.jpg";
import amo_pic1 from "./../../../style/assets/amo_pic1.jpg";
import amo_pic2 from "./../../../style/assets/amo_pic2.jpg";

import "./AmoPage.css";

const AmoPage = () => {
  return (
    <div>
      <NavBar />
      <h1 className="artist_title">Amo Art</h1>
      <div className="artist_all">
        <div className="artist_photo_and_desc">
          <img
            src={amo_portrait}
            alt="picture of Amo Art artist"
            className="artist_pic"
          />

          <div className="artist_blabla">
            <div>
              <p>
                "Je suis né en 1982. Autodidacte, je me suis passionné dès mon
                plus jeune âge pour les arts graphiques. L’art est, depuis,
                resté le fil conducteur de ma vie et c’est à l’âge de 14 ans que
                je m’intéresse à l’art urbain. Je commence alors à user des
                marqueurs quelques années et à m’essayer au lettrage pour petit
                à petit m’orienter vers de nouvelles techniques telle que le
                pochoir. Tout cela m’a progressivement amené à développer une
                technique que j’ai appelé Paintag et qui consiste à peindre en
                superposant des tags (signatures stylisées à la bombe de
                peinture ou au marqueur). "
              </p>
            </div>
            <div>
              <div className="amo_exemples">
                <img src={amo_pic1} alt="elephant" className="amo_ex" />
                <img src={amo_pic2} alt="fox" className="amo_ex" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AmoPage;
