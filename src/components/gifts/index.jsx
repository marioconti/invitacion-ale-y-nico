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
        Si aparte querés hacernos un regalo, podes ayudarnos con nuestra luna de
        miel
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
            />
          </div>
          <p>
            <span className="bold"> CBU:</span> 0170215840000017124678
          </p>
          <p>
            <span className="bold">ALIAS:</span> Guadi.y.Santi
          </p>
          <p>
            <span className="bold">TITULAR DE LA CUENTA:</span> <br /> FLASS
            SANTIAGO NICOLAS
          </p>
        </div>
      </div>
    </div>
  );
};
