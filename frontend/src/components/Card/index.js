import React from "react";
import { BoxCard, BoxTitleCard, ContainerCard, TitleCard } from "./styles";

function Card(props) {
  return (
    <BoxCard>
      <BoxTitleCard>
        <TitleCard>{props.title}</TitleCard>
      </BoxTitleCard>
      <ContainerCard>{props.children}</ContainerCard>
    </BoxCard>
  );
}

export default Card;
