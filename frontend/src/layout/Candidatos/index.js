import { Grid } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import ListaCandidatos from "../../components/ListaCandidatos";
import TitlePage from "../../components/TitlePage";
import { ContainerVagas } from "./styles";

// import { Container } from './styles';

function Candidatos() {
  return (
    <Grid container>
      <Header />
      <ContainerVagas>
          <TitlePage title="Candidatos"/>
        <ListaCandidatos/>
      </ContainerVagas>
    </Grid>
  );
}

export default Candidatos;
