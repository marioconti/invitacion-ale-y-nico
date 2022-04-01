import React from "react";
import "./styles.css";
// import Carousel from "react-material-ui-carousel";

export const Gratitude = () => {
  return (
    <div id="gratitude" className="gratitude-container">
      <h1 className="title-section">CADA VEZ FALTA MENOS</h1>
      <p className="description-text width-gratitude">
        Queremos darles las gracias a todos: amigos, familiares y seres
        queridosque nos han acompañado en todo este tiempo.
        <br /> Es una alegría gigante para nosotros poder compartir este momento
        con ustedes.
        <br />
        Esperamos que nos acompañando ahora y siempre!
      </p>
      {/* <div className="container-carousel-photos">
        <Carousel
          animation="slide"
          duration={800}
          className="carousel-mui-photo"
          fullHeightHover={false}
          navButtonsProps={{
            style: {
              display: "none",
            },
          }}
          autoPlay={true}
          stopAutoPlayOnHover={true}
          swipe={false}
          navButtonsAlwaysVisible={false}
        >
          <div className="container-retrat">
            <img className="retrat" src="images/photos/1.jpg" alt="gaby y lu" />
          </div>
          <div className="container-retrat">
            <img className="retrat" src="images/photos/2.jpg" alt="gaby y lu" />
          </div>
          <div className="container-retrat">
            <img
              className="retrat"
              src="images/photos/3.jpeg"
              alt="gaby y lu"
            />
          </div>
          <div className="container-retrat">
            <img className="retrat" src="images/photos/4.jpg" alt="gaby y lu" />
          </div>
          <div className="container-retrat">
            <img className="retrat" src="images/photos/5.jpg" alt="gaby y lu" />
          </div>
          <div className="container-retrat">
            <img className="retrat" src="images/photos/6.jpg" alt="gaby y lu" />
          </div>
          <div className="container-retrat">
            <img
              className="retrat"
              src="images/photos/7.jpeg"
              alt="gaby y lu"
            />
          </div>
          <div className="container-retrat">
            <img className="retrat" src="images/photos/8.jpg" alt="gaby y lu" />
          </div>
        </Carousel>
      </div> */}
    </div>
  );
};
