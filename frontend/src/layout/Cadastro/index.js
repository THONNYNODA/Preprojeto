import React from "react";
import { BoxText, Title, Divisorio, ContainerCadastro } from "./styles";

import Candidato from "../../components/Cadastros/Candidato";
import TitlePage from "../../components/TitlePage";

function Cadastro() {
  return (
    <ContainerCadastro>
      <TitlePage Title="Cadastrar" />
      <Candidato />
    </ContainerCadastro>
  );
}

export default Cadastro;
