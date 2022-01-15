import { Grid } from "@mui/material";
import React from "react";
import Header from "../../components/Header";




import { ContainerDashbord } from "./styles";


function Dashbord() {
  return (
    <Grid container>
      <Header />
      <ContainerDashbord>
        teste
      </ContainerDashbord>
    </Grid>
  );
}

export default Dashbord;
