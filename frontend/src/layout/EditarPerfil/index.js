import React, { useState } from "react";

import TitlePage from "../../components/TitlePage";
import Dashbord from "../Dashbord";
import EditarCandidato from "../../components/Cadastros/EditarCandidato";
import { ContainerCadastros } from "./styles";
import PerfilMan from "../../assets/PerfilMan.svg";

function EditarPerfil() {
  return (
    <Dashbord>
      <TitlePage title="Perfil" />
      <ContainerCadastros>
        <main>
          <div className="containA">
            <img src={PerfilMan} alt="perfil man" />
            <ul>
              <li>01/05/1992</li>
              <li>Brasileiro</li>
              <li>Masculino</li>
            </ul>
          </div>
          <div className="containB">
            <h2 className="title">Tony Takeharo Noda</h2>
            <div className="perfil">
              <h2 className="subtitle">Perfil</h2>
            </div>
          </div>
        </main>
      </ContainerCadastros>
    </Dashbord>
  );
}

export default EditarPerfil;
