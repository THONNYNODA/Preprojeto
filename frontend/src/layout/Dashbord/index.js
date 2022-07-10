import { Grid } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { ContainerDashbord } from "./styles";

function Dashbord(props) {
  return (
    <>
      <Header />
      <ContainerDashbord>{props.children}</ContainerDashbord>
    </>
  );
}

export default Dashbord;
