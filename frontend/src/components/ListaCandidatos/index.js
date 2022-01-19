import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
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
  LinkDetalhe,
  TextDetalhe,
  ModalDetalhe,
} from "./styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import { Buttons } from "../Cadastros/Candidato/styles";
import CloseIcon from "@mui/icons-material/Close";

function ListaCandidatos(props) {
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
  };

  function DetalheCandidato(props) {
    const handleClose = () => props.setOpen(false);
    const handleCandidatar = () => {
      alert("Inscrito!!");
      props.setOpen(false);
    };

    const calculoIdade = (nascimento, hoje) => {
      var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
      if (
        new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) <
        new Date(
          hoje.getFullYear(),
          nascimento.getMonth(),
          nascimento.getDate()
        )
      )
        diferencaAnos--;
      return console.log(diferencaAnos);
    };
    calculoIdade();

    return (
      <>
        <ModalDetalhe>
          <ContainerDetalhe>
            <BoxIconClose onClick={handleClose} onChange={handleClose}>
              <CloseIcon />
            </BoxIconClose>
            <Card
              key={props.lista[idAtual].id}
              title={props.lista[idAtual].name}
            >
              <BoxDetalhe>
                <TextDetalhe>Nome Completo:</TextDetalhe>
                <TextDetalhe>{props.lista[idAtual].name}</TextDetalhe>
              </BoxDetalhe>
              <BoxDetalhe>
                <TextDetalhe>Idade:</TextDetalhe>
                <TextDetalhe>22 anos</TextDetalhe>
              </BoxDetalhe>
              <BoxDetalhe>
                <TextDetalhe>Formação:</TextDetalhe>
                <TextDetalhe>Técnico de Enfermagem</TextDetalhe>
              </BoxDetalhe>
              <BoxDetalhe>
                <TextDetalhe>Cargo Requerido: </TextDetalhe>
                <TextDetalhe>Técnico de Enfermagem</TextDetalhe>
              </BoxDetalhe>
              <BoxDetalhe>
                <TextDetalhe>Periodo: </TextDetalhe>
                <TextDetalhe>Noturno</TextDetalhe>
              </BoxDetalhe>
              <BoxDetalhe>
                <TextDetalhe>Telefone: </TextDetalhe>
                <TextDetalhe>
                  <LinkDetalhe href="tel:(44) 9 9999-9999">
                    (44) 9 9999-9999
                  </LinkDetalhe>
                </TextDetalhe>
              </BoxDetalhe>
              <BoxDetalhe>
                <TextDetalhe>E-mail: </TextDetalhe>
                <TextDetalhe>
                  <LinkDetalhe href={`mailto:${props.lista[idAtual].email}`}>
                    {props.lista[idAtual].email}
                  </LinkDetalhe>
                </TextDetalhe>
              </BoxDetalhe>
              <Buttons onClick={handleCandidatar}>Candidatar - se</Buttons>
            </Card>
          </ContainerDetalhe>
        </ModalDetalhe>
      </>
    );
  }
  return (
    <ContainerListaVagas>
      {open ? (
        <DetalheCandidato {...{ open, setOpen, lista, idAtual }} />
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

      <ContainerTabela>
        <BoxTabelaTitle>
          <LinhaTitle>Nome</LinhaTitle>
          <LinhaTitle>Detalhe</LinhaTitle>
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

export default ListaCandidatos;
