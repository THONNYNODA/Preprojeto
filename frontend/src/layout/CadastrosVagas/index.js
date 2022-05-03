import React from "react";
import TitlePage from "../../components/TitlePage";
import Dashbord from "../Dashbord";
import ListaCadastroVagas from "../../components/ListaCadastroVagas ";

function CadastrosVagas() {
  return (
    <Dashbord>
      <TitlePage title="Cadastros Vagas " />
      <ListaCadastroVagas />
    </Dashbord>
  );
}

export default CadastrosVagas;
