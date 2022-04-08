import React from "react";
import "./styles.css";
import Carousel from "react-material-ui-carousel";

export const Gratitude = () => {
  return (
    <div id="gratitude" className="gratitude-container">
      <h1 className="title-section">CADA VEZ FALTA MENOS</h1>
      <p className="description-text width-gratitude">
        Queremos darles las gracias a todos: amigos, familiares y seres queridos
        que nos han acompañado desde siempre.
        <br /> Es una alegría gigante para nosotros poder compartir este momento
        con ustedes.
        <br />
        Esperamos que nos sigan acompañando ahora y siempre!
      </p>
      <Carousel
        animation="slide"
        duration={200}
        navButtonsAlwaysVisible={false}
        className="carousel-mui-proyect"
        fullHeightHover={false}
        indicators={false}
        navButtonsProps={{
          style: {
            backgroundColor: "#FFF",
            borderRadius: 0,
          },
        }}
        autoPlay={true}
        stopAutoPlayOnHover={false}
        swipe={false}
      >
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos/couple1.jpg"
            alt="gaby y lu"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos/couple2.jpg"
            alt="gaby y lu"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos/couple3.jpg"
            alt="gaby y lu"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos/couple4.jpg"
            alt="gaby y lu"
          />
        </div>
      </Carousel>
    </div>
  );
};
