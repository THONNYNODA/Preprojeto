import React from "react";
import Card from "../Card";
import { BoxIcon, ContainerDetalhe, ModalDetalhe, TitleConfirmacao } from "./styles";



function Confirmacao(props) {
  return (
    <ModalDetalhe>
      <ContainerDetalhe>
        <Card padding="0 5px" background={props.background} title={props.title}>
          <TitleConfirmacao color={props.colorTitle} >{props.titleConfimar}</TitleConfirmacao>
          <BoxIcon color={props.colorIcon}>{props.icon}</BoxIcon>
        </Card>
      </ContainerDetalhe>
    </ModalDetalhe>
  );
}

export default Confirmacao;
