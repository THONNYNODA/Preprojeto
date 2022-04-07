import React, { useEffect, useState } from "react";
import api from "../../services/api";
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
  ContainerAvancado,
  BoxAvancado,
  ButtonAvancado,
  ContainerRadio,
  BoxRadio,
  SeachRadio,
  TitleRadio,
} from "./styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Portal } from "@mui/material";

import FormControlLabel from "@mui/material/FormControlLabel";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function ListaVagas(props) {
  const [lista, setLista] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [open, setOpen] = useState(false);
  const [idAtual, setIdAtual] = useState("");
  const [valor, setValor] = useState();
  const [show, setShow] = React.useState(false);

  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    api.get("vaga/vagas").then((res) => setLista(res.data));
  }, []);

  useEffect(() => {
    const result = lista.filter((person) =>
      person.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase())
    );
    setSearchResult(result);
  }, [lista, pesquisa]);

  const handleOpen = (id) => {
    //console.log(id)
    setIdAtual(id);
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

      <ContainerTabela>
        <BoxTabelaTitle>
          <LinhaTitle>Cargo</LinhaTitle>
          <LinhaTitle>Inscrever</LinhaTitle>
        </BoxTabelaTitle>
        <BoxColuna>
          {Object.keys(searchResult)
            .sort((a, b) =>
              searchResult[a].nome < searchResult[b].nome ? -1 : 0
            )
            .map((e) => (
              <>
                <BoxTabela>
                  <LinhaTabela>{searchResult[e].nome}</LinhaTabela>
                  <LinhaTabela>
                    <BoxIcon
                      onClick={() => handleOpen(searchResult[e])}
                      key={searchResult[e]}
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
