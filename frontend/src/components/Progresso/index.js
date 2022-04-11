import React from "react";

import {  CircularProgresso, ContainerDetalhe, ModalDetalhe } from "./styles";


function Progresso(props) {
  return (
    <ModalDetalhe>
      <ContainerDetalhe>
        <CircularProgresso />
      </ContainerDetalhe>
    </ModalDetalhe>
  );
}

export default Progresso;
