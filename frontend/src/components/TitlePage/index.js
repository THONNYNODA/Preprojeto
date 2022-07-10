import React from "react";
import { ContainerText } from "./styles";

import { BoxText, Title, Divisorio } from "./styles";

function TitlePage(props) {
  return (
    <ContainerText>
      <BoxText>
        <Title fontSize="1.8rem" color="var(--primary-color)">
          {props.title}
        </Title>
        <Divisorio width="100%" minheight="0.2rem" margin="0" />
      </BoxText>
    </ContainerText>
  );
}

export default TitlePage;
