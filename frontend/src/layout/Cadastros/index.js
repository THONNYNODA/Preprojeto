import React, { useState } from "react";
import Card from "../../components/Card";
import CadastrarVagas from "../../components/Cadastros/Vagas";

import TitlePage from "../../components/TitlePage";
import Dashbord from "../Dashbord";
import { BoxCadastros, ContainerCadastros, IconCadastro } from "./styles";
import IconVagas from "../../assets/vagas.png";

function Cadastros() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Dashbord>
      <TitlePage title="Cadastros" />
      <ContainerCadastros>
        <Card title="Vagas">
          <BoxCadastros onClick={handleOpen}>
            <IconCadastro img={IconVagas} />
            <h2>Vagas</h2>
          </BoxCadastros>
        </Card>
        <Card title="Vagas">vaga1</Card>
        <Card title="Vagas">vaga1</Card>
      </ContainerCadastros>
      {open ? <CadastrarVagas {...{ open, setOpen }} /> : null}
    </Dashbord>
  );
}

export default Cadastros;
