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
              src="images/church.png"
              alt="church"
              loading="lazy"
            />
          </div>
          <p className="description-text-two">
            <span className="bold line-heigh">IGLESIA:</span>
            <br /> NUESTRA SEÑORA DEL CARMEN
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">UBICACIÓN:</span>
            <br /> AV. BELGRANO 150,
            <br /> TAFÍ DEL VALLE, TUCUMÁN
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">HORARIO:</span>
            <br /> 11:00 HS
          </p>
          <a
            className="link-map"
            href="https://www.google.com/maps/place/Parroquia+Nuestra+Se%C3%B1ora+del+Carmen/@-26.8536264,-65.7137258,17z/data=!3m1!4b1!4m5!3m4!1s0x94222280cebe4a27:0xad9933062c62b0c4!8m2!3d-26.8536312!4d-65.7115371"
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
              style={{ borderRadius: 10, width:"300px"}}
              src="images/photos-anita-juane/estancia-las-carreras1.jpg"
              alt="party"
              loading="lazy"
            />
          </div>
          <p className="description-text-two">
            <span className="bold line-heigh">FIESTA:</span>
            <br /> ESTANCIA LAS CARRERAS
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">UBICACIÓN:</span>
            <br /> RP 325 KM 13 <br />
            EL MOLLAR, TUCUMÁN
          </p>
          <a className="link-map" href="https://www.google.com/maps/place/Estancia+Las+Carreras/@-26.9779207,-65.7618288,10z/data=!4m22!1m13!4m12!1m4!2m2!1d-65.2026019!2d-26.8322264!4e1!1m6!1m2!1s0x942221597276aedb:0x87ad6d9eb5d524f2!2sESTANCIA+LAS+CARRERAS+EL+MOLLAR!2m2!1d-65.7651607!2d-26.9327786!3m7!1s0x942221597276aedb:0x87ad6d9eb5d524f2!5m2!4m1!1i2!8m2!3d-26.9327786!4d-65.7651607" target="_blank" rel="noreferrer">
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
