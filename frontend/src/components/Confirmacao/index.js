import React from "react";
import Card from "../Card";
import { BoxIcon, ContainerDetalhe, ModalDetalhe, TitleConfirmacao } from "./styles";



function Confirmacao(props) {
  setTimeout(() => {
    return document.location.reload();
  }, 2000)
  return (
    <ModalDetalhe>
      <ContainerDetalhe>
        <Card padding="0 0.5rem" background={props.background} title={props.title}>
          <TitleConfirmacao color={props.colortitle} >{props.titleConfimar}</TitleConfirmacao>
          <BoxIcon colorIcon={props.colorIcon}>{props.icon}</BoxIcon>
        </Card>
      </ContainerDetalhe>
    </ModalDetalhe>
  );
}

export default Confirmacao;
