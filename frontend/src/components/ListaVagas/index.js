import React, { useEffect, useState } from "react";
import api from "../../services/api";
import DetalheVagas from "../DetalheVaga";
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
  ContainerAvancado,
  BoxAvancado,
  ButtonAvancado,
  ContainerRadio,
  BoxRadio,
  SeachRadio,
  TitleRadio,
  BoxIconStatus,
  ContainerPortal
} from "./styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Portal } from "@mui/material";

import FormControlLabel from "@mui/material/FormControlLabel";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Card from "../Card";

function ListaVagas(props) {
  const [lista, setLista] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [idAtual, setIdAtual] = useState("");
  const [valor, setValor] = useState();
  const [periodo, setPeriodo] = useState();
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
    setIdAtual(id);
    setOpen(true);
  };

  function Frases(data) {
    const frase = data.replace(/(^\w{1})|(\s+\w{1})/g, (letra) =>
      letra.toUpperCase()
    );
    return frase;
  }

  useEffect(() => {
    var resultado = [];
    if (valor === "disponivel") {
      resultado = lista.filter((e) => e.status === "ativo");
    } else if (valor === "preenchido") {
      resultado = lista.filter((e) => e.status === "desativado");
    } else if (valor === "todos") {
      resultado = lista;
    }
    setSearchResult(resultado);
  }, [valor]);
  useEffect(() => {
    var resultado = [];
    if (periodo === "diurno") {
      resultado = lista.filter((e) => e.turnoTrabalho === "diurno");
    } else if (periodo === "matiturno") {
      resultado = lista.filter((e) => e.turnoTrabalho === "matiturno");
    } else if (periodo === "noturno") {
      resultado = lista.filter((e) => e.turnoTrabalho === "noturno");
    } else if (periodo === "todos") {
      resultado = lista;
    }
    setSearchResult(resultado);
  }, [periodo]);

  return (
    <>
      <Card background="rgba(31, 99, 87,0.8)" margintop="4rem">
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
                <ContainerPortal>

                
                  <ContainerRadio>
                    <TitleRadio>Status</TitleRadio>
                    <BoxRadio
                      defaultValue="todos"
                      name={valor}
                      onChange={(e) => {
                        setValor(e.target.value);
                      }}
                    >
                      <FormControlLabel
                        value="disponivel"
                        control={<SeachRadio />}
                        label="Disponivel"
                      />
                      <FormControlLabel
                        value="preenchido"
                        control={<SeachRadio />}
                        label="Preenchido"
                      />
                      <FormControlLabel
                        value="todos"
                        control={<SeachRadio />}
                        label="Todos"
                      />
                    </BoxRadio>
                  </ContainerRadio>
                  <ContainerRadio>
                    <TitleRadio>Periodo</TitleRadio>
                    <BoxRadio
                      defaultValue="todos"
                      name={periodo}
                      onChange={(e) => {
                        setPeriodo(e.target.value);
                      }}
                    >
                      <FormControlLabel
                        value="diurno"
                        control={<SeachRadio />}
                        label="Diurno"
                      />
                      <FormControlLabel
                        value="matiturno"
                        control={<SeachRadio />}
                        label="Matiturno"
                      />
                      <FormControlLabel
                        value="noturno"
                        control={<SeachRadio />}
                        label="Noturno"
                      />
                      <FormControlLabel
                        value="todos"
                        control={<SeachRadio />}
                        label="Todos"
                      />
                    </BoxRadio>
                  </ContainerRadio>
                  </ContainerPortal>
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
              <LinhaTitle>Status</LinhaTitle>
              <LinhaTitle>Cargo</LinhaTitle>
              <LinhaTitle>Periodo</LinhaTitle>
              <LinhaTitle>Detalhe</LinhaTitle>
            </BoxTabelaTitle>
            <BoxColuna>
              {Object.keys(searchResult)
                .sort((a, b) =>
                  searchResult[a].nome < searchResult[b].nome ? -1 : 0
                )
                .map((e) => (
                  <>
                    {searchResult[e] ? (
                      <BoxTabela key={String(searchResult[e].id)}>
                        <LinhaTabela>
                          {searchResult[e].status === "ativo" ? (
                            <BoxIconStatus color="var(--primary-color)">
                              <CheckCircleOutlineIcon />
                            </BoxIconStatus>
                          ) : (
                            <BoxIconStatus color="var(--error-color)">
                              <NotInterestedIcon />
                            </BoxIconStatus>
                          )}
                        </LinhaTabela>
                        <LinhaTabela>
                          {Frases(searchResult[e].nome)}
                        </LinhaTabela>
                        <LinhaTabela>
                          {Frases(searchResult[e].turnoTrabalho)}
                        </LinhaTabela>
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
                    ) : null}
                  </>
                ))}
            </BoxColuna>
          </ContainerTabela>
        </ContainerListaVagas>
      </Card>
      {open ? <DetalheVagas {...{ open, setOpen, lista, idAtual }} /> : null}
    </>
  );
}

export default ListaVagas;
