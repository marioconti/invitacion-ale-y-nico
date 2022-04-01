import React from "react";
import "./styles.css";

export const Footer = () => {
  return (
    <div id="contacto" className="footer-container">
      <div className="contact-container">
        <h1 className="message-title">¿TENÉS ALGUNA CONSULTA?</h1>
        <div className="container-links">
          <a
            href="https://api.whatsapp.com/send?phone=5493815787899"
            className="link-wsp"
            target="_blank"
            rel="noreferrer"
          >
            <p className="name-wsp">Guada</p>
            <div className="wsp-container">
              <img
                className="image-wsp"
                src="images/whatsapp.png"
                alt="logo wsp"
              />
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5493814476727"
            className="link-wsp"
            target="_blank"
            rel="noreferrer"
          >
            <p className="name-wsp">Santi</p>
            <div className="wsp-container">
              <img
                className="image-wsp"
                src="images/whatsapp.png"
                alt="logo wsp"
              />
            </div>
          </a>
        </div>
        <div className="footer-mario">
          © 2022 Created by{" "}
          <a
            className="link-mario"
            href="https://www.linkedin.com/in/mario-augusto-conti/"
            target="_blank"
            rel="noreferrer"
          >
            Mario A. Conti
          </a>
        </div>
      </div>
    </div>
  );
};
