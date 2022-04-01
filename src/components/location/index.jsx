import React from "react";
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const Location = () => {
  return (
    <div className="location-main-container">
      <h1
        id="ceremonia-fiesta"
        className="title-section"
        data-aos="fade-left"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        CEREMONIA Y FIESTA
      </h1>
      <div className="container-location">
        <div
          className="data-location"
          data-aos="fade-right"
          data-aos-offset="-200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <div className="container-img-style">
            <img className="img-styles" src="images/church.png" alt="church" />
          </div>
          <p className="description-text-two">
            <span className="bold">PARROQUIA:</span> SAN JUAN BOSCO
          </p>
          <p className="description-text-two">
            <span className="bold">UBICACIÓN:</span> AV. MITRE 312
          </p>
          <p className="description-text-two">
            <span className="bold">HORARIO:</span> 20:00 HS
          </p>
          <a
            className="link-map"
            href="https://www.google.com/maps/place/Parroquia+San+Juan+Bosco/@-26.8237382,-65.2198132,17z/data=!3m1!4b1!4m5!3m4!1s0x94225c4256758df3:0xe6359c7d443fb9b5!8m2!3d-26.8237382!4d-65.2176245"
            target="_blank"
            rel="noreferrer"
          >
            UBICACIÓN
          </a>
        </div>
        <div
          className="data-location"
          data-aos="fade-left"
          data-aos-offset="-200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <div className="container-img-style">
            <img className="img-styles" src="images/party.png" alt="party" />
          </div>
          <p className="description-text-two">
            <span className="bold">SALÓN:</span> ESPACIO TAFI EVENTOS 1
          </p>
          <p className="description-text-two">
            <span className="bold">UBICACIÓN:</span> RUTA 313, KM 5.0, TAFÍ
            VIEJO
          </p>
          <p className="description-text-two">
            <span className="bold">HORARIO:</span> 21:30 HS
          </p>
          <a
            className="link-map"
            href="https://www.google.com/maps/place/Espacio+Tafi+Eventos+1/@-26.7530027,-65.2495299,17z/data=!3m1!4b1!4m5!3m4!1s0x94226784d83c57df:0x16913e635fe71409!8m2!3d-26.7530075!4d-65.2473412"
            target="_blank"
            rel="noreferrer"
          >
            UBICACIÓN
          </a>
        </div>
      </div>
    </div>
  );
};
