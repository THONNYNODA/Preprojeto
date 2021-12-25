import React from "react";

import { BoxText, ContainerFilter, ContainerLogin, Text, Title } from "./styles";

function Login() {
  return (
    <>
      <ContainerLogin width="65%">
        <ContainerFilter>
          <BoxText>
            <Title>Bem-Vindo ao Vagas Cemil</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at urna augue. Fusce et sapien in nibh interdum facilisis.</Text>
          </BoxText>
        </ContainerFilter>
      </ContainerLogin>
    </>
  );
}

export default Login;
