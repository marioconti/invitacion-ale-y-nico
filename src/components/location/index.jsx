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
            <span className="bold">CAPILLA:</span> SAN ANTONIO DE PADUA
          </p>
          <p className="description-text-two">
            <span className="bold">UBICACIÓN:</span> ROMANO 651 <br />
            (ESQUINA PJE USANDIVARA)
          </p>
          <p className="description-text-two">
            <span className="bold">HORARIO:</span> 18:00 HS
          </p>
          <a
            className="link-map"
            href="https://www.google.com.ar/maps/place/Capilla+San+Antonio+de+Padua/@-26.8288175,-65.2721654,14.88z/data=!4m9!1m2!2m1!1ssan+antonio+de+padua+tucuman!3m5!1s0x94225cc503bda637:0x661442cd81942b54!8m2!3d-26.8252113!4d-65.2711362!15sChxzYW4gYW50b25pbyBkZSBwYWR1YSB0dWN1bWFukgEPY2F0aG9saWNfY2h1cmNo"
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
            <span className="bold">SALÓN:</span> COUNTRY SAN PABLO <br /> SAN
            PABLO COUNTRY <br /> LIFE & GOLF
          </p>
          <p className="description-text-two">
            <span className="bold">UBICACIÓN:</span> AVENIDA SOLANO VERA RUTA
            PROVINCIAL 338 KM.5
          </p>
          <p className="description-text-two">
            <span className="bold">HORARIO:</span> 19:30 HS
          </p>
          <a
            className="link-map"
            href="https://www.google.com.ar/maps/place/San+Pablo+Country+Life+%26+Golf/@-26.8526733,-65.3189034,15.5z/data=!4m5!3m4!1s0x9422436f81cdc72d:0x2f083f34b254a65e!8m2!3d-26.8539831!4d-65.3155822"
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
