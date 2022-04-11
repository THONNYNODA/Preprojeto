import React from "react";
import { BoxCard, BoxTitleCard, ContainerCard, TitleCard } from "./styles";

function Card(props) {
  return (
    <BoxCard maxWidth={props.maxWidth} marginTop={props.marginTop} background={props.background}>
      <BoxTitleCard>
        <TitleCard colorTitle={props.colorTitle}>{props.title}</TitleCard>
      </BoxTitleCard>
      <ContainerCard padding={props.padding}>{props.children}</ContainerCard>
    </BoxCard>
  );
}

export default Card;
