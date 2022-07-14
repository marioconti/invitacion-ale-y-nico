import React from "react";
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const Hotel = () => {
  return (
    <div className="location-main-container">
      <h1
        id="hotel"
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
        ALOJAMIENTO
      </h1>
      <p
        className="description-text"
        data-aos="fade-right"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        Les dejamos algunas sugerencias por si llegasen a necesitar alojamiento.
        <br />
        Les recomendamos buscar cerca de Yerba Buena ya que las celebraciones
        serán en esa ubicación.
      </p>
      <div className="container-location">
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
              className="img-styles"
              src="images/hotel1.png"
              alt="church"
              loading="lazy"
            />
          </div>
          <p className="description-text-two">
            <span className="bold line-heigh">HOWARD JOHNSON</span>
            <br /> HOTEL
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">UBICACIÓN:</span>
            <br /> AV. ACONQUIJA 1136 <br />
            YERBA BUENA
          </p>
          <a
            className="link-map"
            href="https://www.hjyerbabuena.com/"
            target="_blank"
            rel="noreferrer"
          >
            LINK AL HOTEL
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
              className="img-styles couple-dance"
              src="images/hotel2.png"
              alt="party"
              loading="lazy"
            />
          </div>
          <p className="description-text-two">
            <span className="bold line-heigh">CASA LOLA</span>
            <br /> HOTEL BOUTIQUE
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">UBICACIÓN:</span>
            <br /> FLORIDA SUR 167 <br />
            YERBA BUENA
          </p>
          <a
            className="link-map"
            href="http://casalola.com.ar/"
            target="_blank"
            rel="noreferrer"
          >
            LINK AL HOTEL
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
              src="images/hotel1.png"
              alt="party"
              loading="lazy"
            />
          </div>
          <p className="description-text-two">
            <span className="bold line-heigh">HILTON GARDEN INN</span>
            <br /> HOTEL
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">UBICACIÓN:</span>
            <br /> MIGUEL LILLO 365 <br />
            SAN MIGUEL DE TUCUMÁN
          </p>
          <a
            className="link-map"
            href="https://www.hilton.com/en/hotels/tucgigi-hilton-garden-inn-tucuman/?SEO_id=GMB-AMER-GI-TUCGIGI&y_source=1_MTIxNjk0OTAtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D"
            target="_blank"
            rel="noreferrer"
          >
            LINK AL HOTEL
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
