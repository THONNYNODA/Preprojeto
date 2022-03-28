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
  ButtonAvancado,
  ContainerRadio,
  PortalAvancado,
} from "./styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import FormControlLabel from "@mui/material/FormControlLabel";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Portal from "@mui/material/Portal";
import Box from "@mui/material/Box";

function Search(props) {
  const [lista, setLista] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [idAtual, setIdAtual] = useState("");
  const [valor, setValor] = useState();

  const [show, setShow] = React.useState(false);

  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

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
      <ContainerAvancado>
        <Box>
          {show ? (
            <Portal container={container.current}>
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
            </Portal>
          ) : null}
          <BoxAvancado>
            <ButtonAvancado type="button" onClick={handleClick}>
              {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </ButtonAvancado>
          </BoxAvancado>
        </Box>
        <Box ref={container} />
      </ContainerAvancado>
    </ContainerListaVagas>
  );
}

export default Search;
