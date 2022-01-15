import { Grid } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import ListaVagas from "../../components/ListaVagas";
import TitlePage from "../../components/TitlePage";
import { ContainerVagas } from "./styles";

// import { Container } from './styles';

function Vagas() {
  return (
    <Grid container>
      <Header />
      <ContainerVagas>
          <TitlePage title="Vagas"/>
        <ListaVagas />
      </ContainerVagas>
    </Grid>
  );
}

export default Vagas;
