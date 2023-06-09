import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import "./styles.css";

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
          <div
            className="container-img-style img-responsive-church"
            style={{ height: 180 }}
          >
            <img
              style={{ height: 150, marginTop: 30 }}
              className="img-styles"
              src="images/church.png"
              alt="church"
              loading="lazy"
            />
          </div>
          <p className="description-text-two">
            <span className="bold line-heigh">PARROQUIA:</span>
            <br /> CRISTO REY
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">UBICACIÓN:</span>
            <br /> AV. MATE DE LUNA 3906
            <br /> SAN MIGUEL DE TUCUMÁN, TUCUMÁN
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">HORARIO:</span>
            <br /> 12:00 AM
          </p>
          <a
            className="link-map"
            href="https://goo.gl/maps/HsMziEJ3H4SiGttPA"
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
          <div
            className="container-img-style  gif-dance"
            style={{ height: 180 }}
          >
            <img
              style={{ height: 240 }}
              alt="party"
              className="img-styles couple-dance"
              src="https://media4.giphy.com/media/sZorfXxRDb4D8qllg0/giphy.gif?cid=790b76117b07f25079fa07ced0c3a8162a0556f3b9d7d168&rid=giphy.gif&ct=g"
              title="couple"
            />
          </div>
          <p className="description-text-two">
            <span className="bold line-heigh">SALÓN:</span>
            <br /> COUNTRY SAN PABLO
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">UBICACIÓN:</span>
            <br /> AV SOLANO VERA, <br /> RUTA 339 KM 5 <br /> YERBA BUENA,
            TUCUMÁN
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">HORARIO:</span>
            <br /> 13:00 PM
          </p>
          <a
            className="link-map"
            href="https://goo.gl/maps/gRy5rLgZBGMTFSFu8"
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
