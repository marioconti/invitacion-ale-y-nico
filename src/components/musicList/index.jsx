import React from "react";
import { Link } from "react-scroll";
import "./styles.css";

export const ListWedding = () => {
  return (
    <div id="playlist" className="container-lista-wedding">
      <Link
        className={`back-top`}
        to="/"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}
      >
        <img
          className="svg-back-top"
          src="images/back-top.svg"
          alt="back-top"
        />
      </Link>
      <h1
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
        ¿NOS AYUDAS CON LA MÚSICA?
      </h1>
      <div
        className="container-music"
        data-aos="fade-left"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <p className="description-text">
          ¿Cuál es esa canción que no puede faltar en la fiesta?
          <br /> Dejanos tu recomendación y bailemosla juntos esa noche!
        </p>
        <div className="container-img-style music-2">
          <img
            className="img-styles"
            src="images/music4.png"
            alt="spotify"
            loading="lazy"
          />
        </div>
        <a
          className="link-playlist"
          // TODO:LINK A FORMULARIO CON RECOMENDACIONES
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJzPJzy8AwTPwx19mu6L2IArE89b2Sn-SIVN9CXqoQgLTwjw/viewform?usp=sf_link"
          target="_blank"
          rel="noreferrer"
        >
          RECOMENDAR
        </a>
        <a
          className="link-playlist margin-link"
          href="https://open.spotify.com/playlist/386U2s6TkQ9bpxCMyxpyxJ?si=f375483d181a4c47"
          target="_blank"
          rel="noreferrer"
        >
          PLAYLIST
          <div className="container-img-spotify">
            <img
              className="image-spotify"
              src="images/spotify.png"
              alt="play list link"
            />
          </div>
        </a>
      </div>
    </div>
  );
};
