import React from "react";
import "./styles.css";

export const Gifts = () => {
  return (
    <div className="container-main-gifts">
      <h1
        id="regalos"
        className="title-section"
        data-aos="fade-right"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        style={{ marginTop: 0 }}
      >
        ¿QUERÉS HACERNOS UN REGALO?
      </h1>
      <p
        className="description-text"
        data-aos="fade-left"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        Lo más importante para nosotros es que puedas estar ahí presente. <br />
        Si aparte querés hacernos un regalo, podés ayudarnos con nuestra <br />
        luna de miel.
      </p>
      <div
        className="container-gifts"
        data-aos="fade-right"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className="data-gits">
          <div className="container-img-style ">
            <img
              className="img-styles"
              src="images/honeymoon.png"
              alt="honeymoon"
              loading="lazy"
            />
          </div>
          {/* <p className="description-text-two">
            <span className="bold line-heigh"> CBU:</span>
            <br />
          </p> */}
          {/* <p className="description-text-two">
            <span className="bold line-heigh">ALIAS:</span>
            <br /> SABRI.PRUEBA.TUCU
          </p> */}
          <p className="description-text-two">
            <span className="bold line-heigh">CBU:</span>
            <br />
            0070089430004135437129
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">ALIAS:</span>
            <br />
            ALE.NICO.27M
          </p>
          <p className="description-text-two">
            <span className="bold line-heigh">TITULAR:</span>
            <br />
            Alejandra Narchi
          </p>
        </div>
      </div>
      {/* <div
        className="container-gifts"
        data-aos="fade-left"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className="data-gits">
          <div className="container-img-style letter">
            <img
              className="img-styles"
              src="images/buzon2.png"
              alt="cofre"
              loading="lazy"
            />
          </div>
          <p className="description-text-two" style={{ marginTop: "-40px" }}>
            <span className="bold line-heigh">BUZÓN EN EL SALÓN</span>
          </p>
        </div>
      </div> */}
    </div>
  );
};
