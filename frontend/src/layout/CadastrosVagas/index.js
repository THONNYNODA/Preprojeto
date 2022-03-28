import React, { useState } from "react";
import Card from "../../components/Card";
import CadastrarVagas from "../../components/Cadastros/Vagas";

import TitlePage from "../../components/TitlePage";
import Dashbord from "../Dashbord";
import { BoxCadastros, ContainerCadastros, IconCadastro } from "./styles";
import IconVagas from "../../assets/vagas.png";
import ListaCadastroVagas from "../../components/ListaCadastroVagas ";

function CadastrosVagas() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Dashbord>
      <TitlePage title="Cadastros Vagas " />
      <ListaCadastroVagas />
      {open ? <CadastrarVagas {...{ open, setOpen }} /> : null}
    </Dashbord>
  );
}

export default CadastrosVagas;
