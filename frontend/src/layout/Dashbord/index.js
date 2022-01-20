import { Grid } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { ContainerDashbord } from "./styles";


function Dashbord(props) {
  return (
    <Grid container>
      <Header />
      <ContainerDashbord>
        {props.children}
      </ContainerDashbord>
    </Grid>
  );
}

export default Dashbord;
