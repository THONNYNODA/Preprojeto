import React, { useState } from "react";
import Card from "../../components/Card";

import TitlePage from "../../components/TitlePage";
import Dashbord from "../Dashbord";
import { BoxCadastros, ContainerCadastros, IconCadastro } from "./styles";
import IconVagas from "../../assets/vagas.png";

function Cadastros() {
  const [open, setOpen] = useState("")

  return (
    <Dashbord>
      <TitlePage title="Cadastros" />
      <ContainerCadastros>
        <Card title="Vagas">
          <BoxCadastros>
            <IconCadastro img={IconVagas} />
            <h2>Vagas</h2>
          </BoxCadastros>
        </Card>
        <Card title="Vagas">vaga1</Card>
        <Card title="Vagas">vaga1</Card>
      </ContainerCadastros>
    </Dashbord>
  );
}

export default Cadastros;
