import React from "react";
import { BoxCard, BoxTitleCard, ContainerCard, TitleCard } from "./styles";

function Card(props) {
  return (
    <BoxCard maxwidth={props.maxwidth} margintop={props.margintop} background={props.background}>
      <BoxTitleCard>
        <TitleCard colortitle={props.colortitle}>{props.title}</TitleCard>
      </BoxTitleCard>
      <ContainerCard padding={props.padding}>{props.children}</ContainerCard>
    </BoxCard>
  );
}

export default Card;
