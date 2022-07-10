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
  Countain,
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
  const [idade, setIdade] = useState();
  const [genero, setGenero] = useState();
  const [cidade, setCidade] = useState();

  const [show, setShow] = React.useState(false);

  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    api.get("candidato/candidatos").then((res) => setLista(res.data));
  }, []);

  console.log(lista)

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

  const calculoIdade = (dataNascimento) => {
    var hoje = new Date();
    var nascimento = new Date(dataNascimento);
    var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();

    if (
      new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) <
      new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())
    )
      diferencaAnos--;

    return diferencaAnos;
  };

  useEffect(() => {
    var resultado = [];

    if (idade === "menor18") {
      resultado = lista.filter(
        (e) => calculoIdade(e.data_nascimento.toString()) <= 18
      );
    } else if (idade === "18a25") {
      resultado = lista.filter(
        (e) =>
          calculoIdade(e.data_nascimento.toString()) > 18 &&
          calculoIdade(e.data_nascimento.toString()) <= 25
      );
    } else if (idade === "25maior") {
      resultado = lista.filter(
        (e) => calculoIdade(e.data_nascimento.toString()) > 25
      );
    } else if (idade === "todos") {
      resultado = lista;
    }
    setSearchResult(resultado);
  }, [idade]);

  useEffect(() => {
    var resultado = [];
    if (genero === "feminino") {
      resultado = lista.filter((e) => e.genero.includes("Feminino"));
    } else if (genero === "masculino") {
      resultado = lista.filter((e) => e.genero.includes("Masculino"));
    } else if (genero === "todos") {
      resultado = lista;
    }
    setSearchResult(resultado);
  }, [genero]);

  useEffect(() => {
    var resultado = [];
    if (cidade === "umuarama") {
      resultado = lista.filter((e) => e.cidade.includes("Umuarama"));
    } else if (cidade === "todos") {
      resultado = lista;
    }
    setSearchResult(resultado);
  }, [cidade]);

  
  function Frases(data) {
    const frase = data.replace(/(^\w{1})|(\s+\w{1})/g, (letra) =>
      letra.toUpperCase()
    );
    return frase;
  }


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
                  <Countain>
                    <ContainerRadio>
                      <TitleRadio>Idade</TitleRadio>
                      <BoxRadio
                        defaultValue="todos"
                        name={idade}
                        onChange={(e) => {
                          setIdade(e.target.value);
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
                    <ContainerRadio>
                      <TitleRadio>Genero</TitleRadio>
                      <BoxRadio
                        defaultValue="todos"
                        name={genero}
                        onChange={(e) => {
                          setGenero(e.target.value);
                        }}
                      >
                        <FormControlLabel
                          value="feminino"
                          control={<SeachRadio />}
                          label="Feminino"
                        />
                        <FormControlLabel
                          value="masculino"
                          control={<SeachRadio />}
                          label="Masculino"
                        />
                        <FormControlLabel
                          value="todos"
                          control={<SeachRadio />}
                          label="Todos"
                        />
                      </BoxRadio>
                    </ContainerRadio>
                    <ContainerRadio>
                      <TitleRadio>Cidade</TitleRadio>
                      <BoxRadio
                        defaultValue="todos"
                        name={cidade}
                        onChange={(e) => {
                          setCidade(e.target.value);
                        }}
                      >
                        <FormControlLabel
                          value="umuarama"
                          control={<SeachRadio />}
                          label="Umuarama"
                        />
                        <FormControlLabel
                          value="todos"
                          control={<SeachRadio />}
                          label="Todos"
                        />
                      </BoxRadio>
                    </ContainerRadio>
                  </Countain>
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
              <LinhaTitle>Genero</LinhaTitle>
              <LinhaTitle>Cidade</LinhaTitle>
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
                    {searchResult[e] ? (
                      <BoxTabela>
                      <LinhaTabela>{Frases(searchResult[e].nome)}</LinhaTabela>
                      <LinhaTabela>{searchResult[e].genero}</LinhaTabela>
                      <LinhaTabela>{Frases(searchResult[e].cidade)}</LinhaTabela>
                      <LinhaTabela>
                        {calculoIdade(searchResult[e].dataNascimento)}
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
      {open ? (
        <DetalheCandidato
          {...{ open, setOpen, lista, idAtual, searchResult }}
        />
      ) : null}
    </>
  );
}

export default ListaCandidatos;
