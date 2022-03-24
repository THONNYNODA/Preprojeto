import React, { useEffect, useState } from "react";
import axios from "axios";

import DetalheCandidato from "../DetalheCandidato";
import {
  BoxIcon,
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
  BoxRadio,
  SeachRadio,
  TitleRadio,
  ContainerAvancado,
  BoxAvancado,
  ContainerRadio,
} from "./styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import FormControlLabel from "@mui/material/FormControlLabel";

function ListaCandidatos(props) {
  const [lista, setLista] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [idAtual, setIdAtual] = useState("");
  const [valor, setValor] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setLista(res.data));
  }, []);

  useEffect(() => {
    const result = lista.filter(
      (person) =>
        person.name
          .toLocaleLowerCase()
          .includes(pesquisa.toLocaleLowerCase()) ||
        person.id.toString().includes(pesquisa.toLocaleLowerCase())
    );
    setSearchResult(result);
  }, [lista, pesquisa]);

  const handleOpen = (id) => {
    setIdAtual(id - 1);
    setOpen(true);
  };

  useEffect(() => {
    var resultado = [];
    if (valor === "menor18") {
      resultado = lista.filter((e) => e.id.toString() <= 5);
    } else if (valor === "18a25") {
      resultado = lista.filter(
        (e) => e.id.toString() > 5 && e.id.toString() <= 8
      );
    } else if (valor === "25maior") {
      resultado = lista.filter((e) => e.id.toString() > 8);
    } else if (valor === "todos") {
      resultado = lista;
    }
    setSearchResult(resultado);
  }, [valor]);

  return (
    <ContainerListaVagas>
      {open ? (
        <DetalheCandidato
          {...{ open, setOpen, lista, idAtual, searchResult }}
        />
      ) : null}
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

      <ContainerRadio>
        <TitleRadio>Idade</TitleRadio>
        <BoxRadio
          defaultValue="todos"
          name={valor}
          onChange={(e) => {
            setValor(e.target.value);
          }}
        >
          <FormControlLabel
            value="menor18"
            control={<SeachRadio />}
            label="Menor de 18 anos"
          />
          <FormControlLabel
            value="18a25"
            control={<SeachRadio />}
            label="18 a 25 anos"
          />
          <FormControlLabel
            value="25maior"
            control={<SeachRadio />}
            label="maior de 25"
          />
          <FormControlLabel
            value="todos"
            control={<SeachRadio />}
            label="Todos"
          />
        </BoxRadio>
      </ContainerRadio>

      <ContainerTabela>
        <BoxTabelaTitle>
          <LinhaTitle>Nome</LinhaTitle>
          <LinhaTitle>Idade</LinhaTitle>
          <LinhaTitle>Detalhe</LinhaTitle>
        </BoxTabelaTitle>
        <BoxColuna>
          {Object.keys(searchResult)
            .sort((a, b) => (searchResult[a].id < searchResult[b].id ? -1 : 0))
            .map((e) => (
              <>
                <BoxTabela>
                  <LinhaTabela>{searchResult[e].name}</LinhaTabela>
                  <LinhaTabela>{searchResult[e].id}</LinhaTabela>
                  <LinhaTabela>
                    <BoxIcon
                      onClick={() => handleOpen(searchResult[e].id)}
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

export default ListaCandidatos;
