import React from "react";
import Card from "../Card";
import { BoxIconClose, ContainerDetalhe, ModalDetalhe } from "./styles";
import CloseIcon from "@mui/icons-material/Close";

function Modal(props) {
  return (
    <>
      <ModalDetalhe />
      <ContainerDetalhe>
        <BoxIconClose onClick={props.onClick}>
          <CloseIcon />
        </BoxIconClose>
        <Card title={props.title}>{props.children}</Card>
      </ContainerDetalhe>
    </>
  );
}

export default Modal;
