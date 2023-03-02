import React from "react";
import Carousel from "react-material-ui-carousel";
import "./styles.css";

export const Gratitude = () => {
  return (
    <div id="gratitude" className="gratitude-container">
      <h1
        className="title-section"
        data-aos="fade-right"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        CADA VEZ FALTA MENOS
      </h1>
      <p
        className="description-text width-gratitude"
        data-aos="fade-left"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        Queremos darles las gracias a todos: amigos, familiares y seres queridos
        que nos han acompañado desde siempre.
        <br /> Es una alegría gigante para nosotros poder compartir este momento
        con ustedes. Esperamos que nos sigan acompañando ahora y siempre!
      </p>
      <Carousel
        animation="slide"
        duration={800}
        navButtonsAlwaysVisible={true}
        className="carousel-mui-proyect"
        fullHeightHover={false}
        indicators={false}
        navButtonsProps={{
          style: {
            backgroundColor: "var(--color-3)",
            borderRadius: 0,
          },
        }}
        autoPlay={false}
        stopAutoPlayOnHover={false}
        swipe={false}
      >
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-pau-y-seba/1.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-pau-y-seba/2.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-pau-y-seba/3.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-pau-y-seba/4.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-pau-y-seba/5.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-pau-y-seba/6.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
        <div className="container-retrat">
          <img
            className="retrat"
            src="images/photos-pau-y-seba/7.jpg"
            alt="pareja"
            loading="lazy"
          />
        </div>
      </Carousel>
    </div>
  );
};
