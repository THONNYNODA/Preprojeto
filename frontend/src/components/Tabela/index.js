import React from "react";
import { BoxIcon, BoxTabela, ContainerTabela, LinhaTabela } from "./styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function Tabela(props) {
  return (
    <ContainerTabela>
      <BoxTabela>
        <LinhaTabela>{props.vagas}</LinhaTabela>
        <LinhaTabela>
          <BoxIcon>
            <PersonAddIcon />
          </BoxIcon>
        </LinhaTabela>
      </BoxTabela>
    </ContainerTabela>
  );
}

export default Tabela;
