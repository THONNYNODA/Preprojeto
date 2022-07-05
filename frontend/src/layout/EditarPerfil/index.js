import React, { useState, useEffect } from "react";

import TitlePage from "../../components/TitlePage";
import Dashbord from "../Dashbord";
import { ContainerCadastros, Divisorio, BoxIcon, ButtonIcon } from "./styles";
import PerfilMan from "../../assets/PerfilMan.svg";
import api from "../../services/api";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function EditarPerfil() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    api.get("/candidatos/3").then((res) => setUser(res.data.candidatos));
  }, []);

  return (
    <Dashbord>
      <TitlePage title="Perfil" />
      <ContainerCadastros>
        <main>
          <div className="containA">
            <img src={PerfilMan} alt="perfil man" />
            <ul>
              <li>{`Data de Nascimento: 01/05/1992`}</li>
              <li>{`Nacionalidae: Brasileiro`}</li>
              <li>{`Sexo: Masculino`}</li>
            </ul>
          </div>
          <div className="containB">
            <h2 className="title">{user.nome}</h2>
            <Divisorio />
            <div className="contain">
              <h2 className="subtitle">Perfil</h2>
              <div>
                <span>{user.email_string}</span>
                <span>{user.email_string}</span>
                <span>Email: {user.email_string}</span>
              </div>
            </div>
            <div className="contain">
              <h2 className="subtitle">Escolaridade</h2>
              <p>
                loremExercitation laborum tempor aliqua adipisicing consectetur
                commodo dolore est culpa excepteur est. Nisi velit qui amet sint
                mollit amet. Aliquip in velit nostrud aliqua sunt. Et incididunt
                nisi aliquip consequat et tempor consectetur nisi amet
                excepteur. Duis magna proident nisi veniam fugiat dolore ad
                proident ex. Elit nisi id eu qui eiusmod elit. Esse occaecat
                dolor irure id ea est.
              </p>
              <div className="boxIcon">
                <ButtonIcon color="var(--primary-color)">
                  <AddIcon />
                </ButtonIcon>
                <ButtonIcon color="var(--alert-color)">
                  <EditIcon />
                </ButtonIcon>
                <ButtonIcon color="var(--error-color)">
                  <DeleteForeverIcon />
                </ButtonIcon>
              </div>
            </div>
            <div className="contain">
              <h2 className="subtitle">Profissão</h2>
              <p>
                loremExercitation laborum tempor aliqua adipisicing consectetur
                commodo dolore est culpa excepteur est. Nisi velit qui amet sint
                mollit amet. Aliquip in velit nostrud aliqua sunt. Et incididunt
                nisi aliquip consequat et tempor consectetur nisi amet
                excepteur. Duis magna proident nisi veniam fugiat dolore ad
                proident ex. Elit nisi id eu qui eiusmod elit. Esse occaecat
                dolor irure id ea est.
              </p>
              <div className="boxIcon">
                <ButtonIcon color="var(--primary-color)">
                  <AddIcon />
                </ButtonIcon>
                <ButtonIcon color="var(--alert-color)">
                  <EditIcon />
                </ButtonIcon>
                <ButtonIcon color="var(--error-color)">
                  <DeleteForeverIcon />
                </ButtonIcon>
              </div>
            </div>
          </div>
        </main>
      </ContainerCadastros>
    </Dashbord>
  );
}

export default EditarPerfil;
