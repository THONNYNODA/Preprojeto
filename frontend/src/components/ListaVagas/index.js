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
} from "./styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Portal } from "@mui/material";

import FormControlLabel from "@mui/material/FormControlLabel";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Card from "../Card";

function ListaVagas(props) {
  const [lista, setLista] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [idAtual, setIdAtual] = useState("");
  const [valor, setValor] = useState();
  const [show, setShow] = React.useState(false);

  const container = React.useRef(null);

useEffect(() => {
  api.get('/vagas').then(res => {
    setLista(res.data.vagas)
  })
}, [])

  const handleClick = () => {
    setShow(!show);
  };

  //Codigo para a producao
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

  useEffect(() => {
    var resultado = [];
    if (valor === "disponivel") {
      resultado = lista.filter((e) => e.status === true);
    } else if (valor === "preenchido") {
      resultado = lista.filter(
        (e) => e.status === false
      );
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
      </Card>
      {open ? <DetalheVagas {...{ open, setOpen, lista, idAtual }} /> : null}
    </>
  );
}

export default ListaVagas;
