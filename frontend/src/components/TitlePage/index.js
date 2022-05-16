import React from "react";
import { ContainerText } from "./styles";

import { BoxText, Title, Divisorio } from "./styles";

function TitlePage(props) {
  return (
    <ContainerText>
      <BoxText>
        <Title fontSize="32px" color="var(--primary-color)">
          {props.title}
        </Title>
        <Divisorio width="100%" minHeight="2px" margin="0" />
      </BoxText>
    </ContainerText>
  );
}

export default TitlePage;
