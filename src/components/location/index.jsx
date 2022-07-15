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
            <img
              className="img-styles"
              src="images/church4.png"
              alt="church"
              loading="lazy"
            />
          </div>
          <p className="description-text-two">
            <span className="bold line-heigh">PARROQUIA:</span>
            <br /> CAPILLA SAN CRISTOBAL
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">UBICACIÓN:</span>
            <br /> LOBO DE LA VEGA 650 <br /> (PLAZA MORENO),
            <br /> YERBA BUENA
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">HORARIO:</span>
            <br /> 12:00HS
          </p>
          <a
            className="link-map"
            href="https://www.google.com/maps/place/Capilla+San+Cristobal/@-26.8065135,-65.2947882,17.5z/data=!4m5!3m4!1s0x942242d1b9586f13:0x7ba4d2ff3c5037ee!8m2!3d-26.8066592!4d-65.2938358"
            target="_blank"
            rel="noreferrer"
          >
            COMO LLEGAR
          </a>
          {/* <a
            className="link-map calendar"
            href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NzVwaHY3ZWhnb2ZiZmZwc21saWtrMjkzMm0gdDNkZzd0aGJpZWZhajI3bnNsbjhjdjZqdWNAZw&tmsrc=t3dg7thbiefaj27nsln8cv6juc%40group.calendar.google.com"
            target="_blank"
            rel="noreferrer"
          >
            AGENDAR
          </a> */}
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
            <img
              className="img-styles couple-dance"
              src="images/party4.png"
              alt="party"
              loading="lazy"
            />
          </div>
          <p className="description-text-two">
            <span className="bold line-heigh">SALÓN:</span>
            <br /> COUNTRY SAN PABLO
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">UBICACIÓN:</span>
            <br /> AV. SOLANO VERA, <br /> RUTA 339 KM 5
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">HORARIO:</span>
            <br /> 13:30 HS
          </p>
          <a
            className="link-map"
            href="https://www.google.com/maps?ll=-26.85128,-65.322698&z=15&t=m&hl=es-ES&gl=US&mapclient=apiv3&cid=3389028215159039582"
            target="_blank"
            rel="noreferrer"
          >
            COMO LLEGAR
          </a>
          {/* <a
            className="link-map calendar"
            href="https://calendar.google.com/calendar/u/0/r/eventedit/copy/MzQ5ODNpdTk1dm9iMjdqMWJvZWx0NWx0dnAgdDNkZzd0aGJpZWZhajI3bnNsbjhjdjZqdWNAZw/bWFyaW9jb250aTkxQGdtYWlsLmNvbQ?pli=1&sf=true"
            target="_blank"
            rel="noreferrer"
          >
            AGENDAR
          </a> */}
        </div>
      </div>
    </div>
  );
};
