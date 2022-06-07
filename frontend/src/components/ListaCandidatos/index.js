import React, { useEffect, useState } from "react";
import api from "../../services/api";
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
} from "./styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import FormControlLabel from "@mui/material/FormControlLabel";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Portal from "@mui/material/Portal";
import Box from "@mui/material/Box";
import Card from "../Card";

function ListaCandidatos(props) {
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

  // useEffect(() => {
  //   api.get("candidato/candidatos").then((res) => setLista(res.data));
  // }, []);
  useEffect(() => {
    api.get("/candidatos").then((res) => setLista(res.data.candidatos));
  }, []);

  useEffect(() => {
    const result = lista.filter(
      (person) =>
        person.nome
          .toLocaleLowerCase()
          .includes(pesquisa.toLocaleLowerCase()) ||
        person.id.toString().includes(pesquisa.toLocaleLowerCase())
    );
    setSearchResult(result);
  }, [lista, pesquisa]);

  const handleOpen = (id) => {
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
    <>
      <Card background="rgba(31, 99, 87,0.8)" marginTop="4rem">
        <ContainerListaVagas>
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
              <LinhaTitle>Nome</LinhaTitle>
              <LinhaTitle>Idade</LinhaTitle>
              <LinhaTitle>Detalhe</LinhaTitle>
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
                      <LinhaTabela>{searchResult[e].id}</LinhaTabela>
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
      </Card>
      {open ? (
        <DetalheCandidato
          {...{ open, setOpen, lista, idAtual, searchResult }}
        />
      ) : null}
    </>
  );
}

export default ListaCandidatos;
