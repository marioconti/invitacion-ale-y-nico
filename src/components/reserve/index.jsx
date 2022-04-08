import React from "react";
// import { styled, Box } from "@mui/system";
// import ModalUnstyled from "@mui/core/ModalUnstyled";
import "./styles.css";

// const StyledModal = styled(ModalUnstyled)`
//   position: fixed;
//   z-index: 1300;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   left: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Backdrop = styled("div")`
//   z-index: -1;
//   position: fixed;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   -webkit-tap-highlight-color: transparent;
// `;

export const Reserve = () => {
  // const [open, setOpen] = useState(false);
  // const handleButton = () => setOpen(!open);

  return (
    <div id="confirmation" className="container-reserve">
      <div className="info-reserve">
        <h1
          className="title-section"
          data-aos="fade-up"
          data-aos-offset="-200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          CONFIRMA TU ASISTENCIA
        </h1>
        <div
          className="confirmation-container"
          data-aos="fade-up"
          data-aos-offset="-200"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <h2 className="description-text">
            <span className="bold">Nos casamos el 30/4/2022</span> <br />
            y esperamos que puedas estar presente! <br />
            Te pedimos que nos confirmes tu asistencia hasta el 22/4/2022
          </h2>
          <div className="container-img-style margin-img">
            <img
              className="img-styles"
              src="images/invitation.png"
              alt="invitation"
            />
          </div>
          <a
            className="modal-confirmation button"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe5-GwgE-pRqBv8OsRrEIiIg5xhCI1QpZiszpu0ymppx8iQ5Q/viewform?usp=sf_link"
            target="_blank"
            rel="noreferrer"
            // type="button"
            // onClick={handleButton}
          >
            CONFIRMAR
          </a>
          {/* <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleButton}
            BackdropComponent={Backdrop}
          >
            <Box className="modal-box"> */}
          {/* <div className="modal-reserve-container">
                <a
                  src="https://docs.google.com/forms/d/1V-NbVeMEL6RAwDtQbUyCoz32wQmtLBvF9OrRemUZXh8/edit"
                  className="form-reserve"
                  alt="link confirmation"
                ></a>
                <div className="exit" onClick={handleButton}>
                  X
                </div>
              </div> */}
          {/* </Box>
          </StyledModal> */}
        </div>
      </div>
    </div>
  );
};
