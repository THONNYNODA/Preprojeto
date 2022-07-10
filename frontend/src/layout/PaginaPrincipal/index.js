import React from "react";
import CardVagas from "../../components/CardVagas";
import TitlePage from "../../components/TitlePage";
import Dashbord from "../Dashbord";

import { ContainerPrincipal } from "./styles";

function PaginaPrincipal(props) {
  return (
    <Dashbord>
      <TitlePage title="Pagina Principal" />
      <ContainerPrincipal>
        <CardVagas />
      </ContainerPrincipal>
    </Dashbord>
  );
}

export default PaginaPrincipal;
