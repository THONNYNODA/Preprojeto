
import React from "react";
import ListaVagas from "../../components/ListaVagas";
import TitlePage from "../../components/TitlePage";
import Dashbord from "../Dashbord";


function Vagas() {
  return (
    <Dashbord>
      <TitlePage title="Vagas" />
      <ListaVagas />
    </Dashbord>
  );
}

export default Vagas;
