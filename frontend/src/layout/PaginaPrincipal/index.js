import React from "react";
import Card from "../../components/Card";
import Noticias from "../../components/Noticias";
import TitlePage from "../../components/TitlePage";
import Dashbord from "../Dashbord";

import { ContainerPrincipal } from "./styles";

function PaginaPrincipal(props) {
  return (
    <Dashbord>
      <TitlePage title="Pagina Principal" />
      <ContainerPrincipal>
        
      </ContainerPrincipal>
    </Dashbord>
  );
}

export default PaginaPrincipal;
