import React from "react";
import {
  BoxText,
  Title,
  ContainerBackground,
  ContainerCadastro,
} from "./styles";

import Candidato from "../../components/Cadastros/Candidato";
import TitlePage from "../../components/TitlePage";

function Cadastro() {
  return (
    <>
      <ContainerBackground />
      <ContainerCadastro>
        <Candidato />
      </ContainerCadastro>
    </>
  );
}

export default Cadastro;
