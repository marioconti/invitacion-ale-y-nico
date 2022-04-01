import React from "react";
import { Link } from "react-scroll";
import { CountDownMarried } from "../countdown";
import "./styles.css";

export const Home = () => {
  return (
    <div id="/" className="home-container">
      <div className="mask">
        <h1 className="title-home">
          Gaby <span className="letter-home-title">&</span> Lu
        </h1>
        <h2 className="sub-title-home">¡NOS CASAMOS!</h2>
        {/* FIXME: VER AQUI COMO HACER Q SIEMPRE HAYA UN ESPACIO EN EL MEDIO */}
        {/* PROBAR CON POSITION EN LA MASK: ONDA QUE TODOS LOS ELEMENTOS TENGAN ABSOLUTE Y MASK RELATIVE Y DISTRIBUIRLOS POR PORCENTAJES DOS EN TOP Y DOS EN BOTTOM FIXED */}
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
