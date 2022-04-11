import React, { useEffect, useState } from "react";
import api from "../../services/api";
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
} from "./styles";

import SearchIcon from "@mui/icons-material/Search";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import CadastrarVagas from "../Cadastros/Vagas";
import Card from "../Card";
import EditarVagas from "../Cadastros/EditarVagas";
import axios from "axios";

function ListaCadastroVagas(props) {
  const [lista, setLista] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [open, setOpen] = useState(false);
  const [idAtual, setIdAtual] = useState("");
  const [dados, setDados] = useState([]);

  // useEffect(() => {
  //   api.get("vaga/vagas").then((res) => setLista(res.data));
  // }, []);

  // useEffect(() => {
  //   const result = lista.filter((person) =>
  //     person.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase())
  //   );
  //   setSearchResult(result);
  // }, [lista, pesquisa]);

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
    setDados(id);
    setOpen(true);
  };
  const handleDelete = (id) => {
    try {
      setTimeout(async () => {
        await api.delete(`vaga/vaga/${id}`).then((res) => {
          return alert("Deletado com sucesso!!");
        });
        document.location.reload();
      }, 400);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card  background="rgba(31, 99, 87,0.8)" marginTop="40px">
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

          <ContainerTabela>
            <BoxTabelaTitle>
              <LinhaTitle>Vagas</LinhaTitle>
              <LinhaTitle>Ação</LinhaTitle>
            </BoxTabelaTitle>
            <BoxColuna>
              {Object.keys(searchResult)
                .sort((a, b) =>
                  searchResult[a].name < searchResult[b].name ? -1 : 0
                )
                .map((e) => (
                  <>
                    <BoxTabela key={searchResult[e].id}>
                      <LinhaTabela>{searchResult[e].name}</LinhaTabela>
                      <LinhaTabela>
                        <BoxIcon
                          onClick={() => handleOpen(searchResult[e])}
                          onChange={handleOpen}
                          color="#FEDA15"
                        >
                          <EditIcon />
                        </BoxIcon>
                        <BoxIcon
                          onClick={() => handleDelete(searchResult[e].id)}
                          onChange={handleOpen}
                          color="#8f1402"
                        >
                          <DeleteForeverIcon />
                        </BoxIcon>
                      </LinhaTabela>
                    </BoxTabela>
                  </>
                ))}
              {/* {Object.keys(searchResult)
              .sort((a, b) =>
                searchResult[a].nome < searchResult[b].nome ? -1 : 0
                )
                .map((e) => (
                  <>
                  <BoxTabela key={searchResult[e].id}>
                    <LinhaTabela>{searchResult[e].nome}</LinhaTabela>
                    <LinhaTabela>
                    <BoxIcon
                    onClick={() => handleOpen(searchResult[e])}
                    onChange={handleOpen}
                    color="#FEDA15"
                    >
                    <EditIcon />
                    </BoxIcon>
                    <BoxIcon
                        onClick={() => handleDelete(searchResult[e].id)}
                        onChange={handleOpen}
                        color="#8f1402"
                        >
                        <DeleteForeverIcon />
                        </BoxIcon>
                        </LinhaTabela>
                  </BoxTabela>
                  </>
              ))} */}
            </BoxColuna>
          </ContainerTabela>
        </ContainerListaVagas>
      </Card>
      {open ? (
        <EditarVagas {...{ open, setOpen, lista, idAtual, dados }} />
      ) : null}
    </>
  );
}

export default ListaCadastroVagas;
