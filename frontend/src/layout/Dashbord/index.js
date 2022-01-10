import { Grid } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

// import { Container } from './styles';

function Dashbord() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={2}>
        <Menu />
      </Grid>
      <Grid item xs={10}>
        <div>Area de trabalho</div>
      </Grid>
    </Grid>
  );
}

export default Dashbord;
