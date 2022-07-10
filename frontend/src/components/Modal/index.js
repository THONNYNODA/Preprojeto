import React from "react";
import Card from "../Card";
import { BoxIconClose, ContainerDetalhe, ModalDetalhe } from "./styles";
import CloseIcon from "@mui/icons-material/Close";

function Modal(props) {
  return (
    <ModalDetalhe>
      <ContainerDetalhe>
        <BoxIconClose onClick={props.onClick}>
          <CloseIcon />
        </BoxIconClose>
        <Card
          padding="0"
          background={props.background}
          colortitle={props.colortitle}
          title={props.title}
        >
          {props.children}
        </Card>
      </ContainerDetalhe>
    </ModalDetalhe>
  );
}

export default Modal;
