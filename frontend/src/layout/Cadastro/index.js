import React from "react";
import { BoxText, Title, Divisorio, ContainerCadastro } from "./styles";

import Candidato from "../../components/Cadastros/Candidato";

function Cadastro() {
  return (
    <ContainerCadastro>
      <BoxText>
        <Title fontSize="48px" color="#1f6357">
          Cadastrar
        </Title>
        <Divisorio width="100%" minHeight="2px" margin="0" />
      </BoxText>
      <Candidato />
    </ContainerCadastro>
  );
}

export default Cadastro;
