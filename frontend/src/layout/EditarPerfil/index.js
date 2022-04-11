import React, { useState } from "react";
import Card from "../../components/Card";
import CadastrarVagas from "../../components/Cadastros/Vagas";

import TitlePage from "../../components/TitlePage";
import Dashbord from "../Dashbord";
import EditarCandidato from "../../components/Cadastros/EditarCandidato";

function EditarPerfil() {
  return (
    <Dashbord>
      <TitlePage title="Editar Perfil" />
      <EditarCandidato/>
    </Dashbord>
  );
}

export default EditarPerfil;
