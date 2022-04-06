import React from "react";
import "./styles.css";

export const ListWedding = () => {
  return (
    <div id="playlist" className="container-lista-wedding">
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
          Agregá a nuestra playlist esa canción que no puede faltar en la
          fiesta!
        </p>
        <div className="container-img-style">
          <img
            className="img-styles"
            src="images/music-note.png"
            alt="spotify"
          />
        </div>
        <a
          className="link-playlist"
          // href="https://open.spotify.com/playlist/5f7iwU4PjexoBGJDG7VMM4?si=02702529e41e47e6&pt=a8a9a5f331c43f37f7be581cdae79ab6"
          href="#"
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
