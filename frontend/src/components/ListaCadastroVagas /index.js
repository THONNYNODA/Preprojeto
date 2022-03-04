import React, { useEffect, useState } from "react";
import axios from "axios";
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

function ListaCadastroVagas(props) {
  const [lista, setLista] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [open, setOpen] = useState(false);
  const [idAtual, setIdAtual] = useState("");
  const [dados, setDados] = useState("");

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
    setDados({ dados: lista[id - 1] });
    setOpen(true);
  };
  const handleDelete = () => {
    alert("Deletado");
  };

  return (
    <ContainerListaVagas>
      {open ? (
        <CadastrarVagas {...{ open, setOpen, lista, idAtual, dados }} />
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
                      onClick={() => handleOpen(searchResult[e].id)}
                      onChange={handleOpen}
                      color="#FEDA15"
                    >
                      <EditIcon />
                    </BoxIcon>
                    <BoxIcon
                      onClick={handleDelete}
                      onChange={handleOpen}
                      color="#8f1402"
                    >
                      <DeleteForeverIcon />
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

export default ListaCadastroVagas;
