import React from "react";
import Card from "../../components/Card";

import TitlePage from "../../components/TitlePage";
import Dashbord from "../Dashbord";
import { ContainerCadastros } from "./styles";


function Cadastros() {
  return (
    <Dashbord>
      <TitlePage title="Cadastros" />
      <ContainerCadastros>
        <Card title="Vagas">
          vaga1
        </Card>
        <Card title="Vagas">
          vaga1
        </Card>
        <Card title="Vagas">
          vaga1
        </Card>
      </ContainerCadastros>
    </Dashbord>
  );
}

export default Cadastros;
