import React from "react";
import ListaCandidatos from "../../components/ListaCandidatos";
import TitlePage from "../../components/TitlePage";
import Dashbord from "../Dashbord";

// import { Container } from './styles';

function Candidatos() {
  return (
    <Dashbord>
      <TitlePage title="Candidatos" />
      <ListaCandidatos />
    </Dashbord>
  );
}

export default Candidatos;
