import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
import DetalheVagas from "../DetalheVaga";
import {
  BoxIcon,
  BoxIconClose,
  BoxTabela,
  ContainerTabela,
  LinhaTabela,
  IconSeach,
  InputSeach,
  BoxSeach,
  ContainerListaVagas,
  BoxTabelaTitle,
  BoxColuna,
  LinhaTitle,
  ContainerDetalhe,
  BoxDetalhe,
  TitleDetalhe,
  TextDetalhe,
  ModalDetalhe,
} from "./styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import { Buttons } from "../Cadastros/Candidato/styles";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

function ListaVagas(props) {
  const [lista, setLista] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [open, setOpen] = useState(false);
  const [idAtual, setIdAtual] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setLista(res.data));
  }, []);

  useEffect(() => {
    const result = lista.filter((person) =>
      person.name.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase())
    );
    setSearchResult(result);
  }, [lista, pesquisa]);

  const handleOpen = (id) => {
    setIdAtual(id);
    setOpen(true);
    console.log(id);
  };

  
  return (
    <ContainerListaVagas>
      {open ? <DetalheVagas {...{ open, setOpen, lista, idAtual }} /> : null}
      <BoxSeach>
        <InputSeach
          value={pesquisa}
          name="pesquisa"
          id="pesquisa"
          onChange={(e) => setPesquisa(e.target.value)}
          placeholder="Pesquisar..."
        />
        <IconSeach>
          <SearchIcon />
        </IconSeach>
      </BoxSeach>

      <ContainerTabela>
        <BoxTabelaTitle>
          <LinhaTitle>Cargo</LinhaTitle>
          <LinhaTitle>Inscrever</LinhaTitle>
        </BoxTabelaTitle>
        <BoxColuna>
          {Object.keys(searchResult)
            .sort((a, b) =>
              searchResult[a].name < searchResult[b].name ? -1 : 0
            )
            .map((e) => (
              <>
                <BoxTabela>
                  <LinhaTabela>{searchResult[e].name}</LinhaTabela>
                  <LinhaTabela>
                    <BoxIcon
                      onClick={() => handleOpen(e)}
                      key={searchResult[e].id}
                      onChange={handleOpen}
                    >
                      <PersonAddIcon />
                    </BoxIcon>
                  </LinhaTabela>
                </BoxTabela>
              </>
            ))}
        </BoxColuna>
      </ContainerTabela>
    </ContainerListaVagas>
  );
}

export default ListaVagas;
