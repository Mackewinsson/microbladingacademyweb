import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Button, FeaturedLiCard } from "./StyledComponents/Styles";
import Image from "next/image";

const Modal = ({ show, onClose, children, title, data }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const {
    name,
    disponibilidad,
    date,
    maxStudents,
    place,
    price,
    time,
    daysOfAccess,
    featured,
    flow,
    onlineCourse,
  } = data;
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>
          {/* CONTENIDO DE EL MODAL */}
          {children}
          <h4
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              marginBottom: "5px",
            }}
          >
            <b>Modalidad {name}</b>
          </h4>
          {onlineCourse ? (
            <small style={{ marginBottom: "1em", textAlign: "center" }}>
              * Solo disponible en Chile
            </small>
          ) : (
            ""
          )}
          <br />
          <span>
            <b>Disponibilidad: </b>
            {disponibilidad === true ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                Disponible
              </span>
            ) : (
              <span style={{ color: "red", fontWeight: "bold" }}>
                No disponible
              </span>
            )}
          </span>
          <span>
            <b>Fecha: </b>
            {date}
          </span>
          <span>
            <b>Capacidad: </b>
            {maxStudents}
          </span>
          <span>
            <b>Duraci??n: </b>
            {daysOfAccess}
          </span>
          <span>
            <b>Inversion: </b>
            {price}
          </span>
          <span>
            <b>Lugar: </b>
            {place}
          </span>
          <span>
            <b>Horario: </b>
            {time}
          </span>

          {onlineCourse && (
            <GiftWrapper>
              <h4>Regalo ????</h4>
              <h5>????Curso online por 6 meses ????</h5>
            </GiftWrapper>
          )}
          {name === "Online PRO" && (
            <GiftWrapper>
              <h4>Regalo ????</h4>
              <h5>Acompa??amiento personalizado por 3 meses via whatsapp</h5>
            </GiftWrapper>
          )}
          <ButtonWrapper>
            {onlineCourse ? (
              <Button marginTop href={flow}>
                Reservar cupo
              </Button>
            ) : (
              <>
                <Button marginTop href={flow}>
                  Comprar curso
                </Button>
                <br />
                <Image src="/img/webpay.png" width="70" height="40" />
              </>
            )}
          </ButtonWrapper>
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const GiftWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  > h4 {
    margin-bottom: 0;
  }
  > h5 {
    margin-top: 0;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledModalBody = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
  > a {
    font-size: 0.6em;
    background-color: #2a2a2a;
    border-radius: 50px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-decoration: none;
  }
`;

const StyledModal = styled.div`
  background: white;
  width: 70%;
  min-height: 300px;
  border-radius: 25px;
  padding: 2em;
`;

const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;
