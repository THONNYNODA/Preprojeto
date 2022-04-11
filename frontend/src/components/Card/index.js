import React from "react";
import { BoxCard, BoxTitleCard, ContainerCard, TitleCard } from "./styles";

function Card(props) {
  return (
    <BoxCard marginTop={props.marginTop} background={props.background}>
      <BoxTitleCard>
        <TitleCard>{props.title}</TitleCard>
      </BoxTitleCard>
      <ContainerCard padding={props.padding}>{props.children}</ContainerCard>
    </BoxCard>
  );
}

export default Card;
