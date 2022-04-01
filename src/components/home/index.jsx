import React from "react";
import { Link } from "react-scroll";
import { CountDownMarried } from "../countdown";
import "./styles.css";

export const Home = () => {
  return (
    <div id="/" className="home-container">
      <div className="mask">
        <h1 className="title-home">
          Guada <span className="letter-home-title">&</span> Santi
        </h1>
        <h2 className="sub-title-home">¡NOS CASAMOS!</h2>
        <CountDownMarried />
        <Link
          className="link-confirmation"
          to="confirmation"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          CONFIRMAR ASISTENCIA
        </Link>
      </div>
    </div>
  );
};
