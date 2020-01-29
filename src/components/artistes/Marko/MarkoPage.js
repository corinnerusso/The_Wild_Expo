import React from "react";
import NavBar from "./../../pincipal/childComponents/NavBar";
import Footer from "./../../pincipal/childComponents/Footer";
import marko_portrait from "./../../../style/assets/marko_portrait.png";
import marko_pic1 from "./../../../style/assets/marko_pic1.jpg";
import marko_pic2 from "./../../../style/assets/marko_pic2.jpeg";

const MarkoPage = () => {
  return (
    <div>
      <NavBar />
      <h1>Marko 93</h1>
      <div className="artist_all">
        <div className="artist_photo_and_desc">
          <img
            src={marko_portrait}
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
                <img src={marko_pic1} alt="elephant" className="amo_ex" />
                <img src={marko_pic2} alt="fox" className="amo_ex" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarkoPage;
