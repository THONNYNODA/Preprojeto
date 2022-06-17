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
  ButtonAdd,
  BoxButton,
  BoxDetalhe,
  BoxIconStatus,
} from "./styles";

import CadastrarVagas from "../Cadastros/CadastrarVagas";
import SearchIcon from "@mui/icons-material/Search";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import DetalheCadastroVagas from "../DetalheCadastroVaga";
import Card from "../Card";
import EditarVagas from "../Cadastros/EditarVagas";
import AddIcon from "@mui/icons-material/Add";
import NoteIcon from "@mui/icons-material/Note";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function ListaCadastroVagas(props) {
  const [lista, setLista] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [open, setOpen] = useState(false);
  const [openDetalhe, setOpenDetalhe] = useState(false);
  const [dados, setDados] = useState([]);
  const [cadastrar, setCadastrar] = useState(false);

  useEffect(() => {
    api.get("/vagas").then((res) => setLista(res.data.vagas));
  }, []);

  useEffect(() => {
    const result = lista.filter((person) =>
      person.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase())
    );
    setSearchResult(result);
  }, [lista, pesquisa]);

  const handleOpen = (id) => {
    setDados(id);
    setOpen(true);
  };
  const handleCadastrarVaga = () => {
    setCadastrar(true);
  };
  const handleOpenDetalhe = (id) => {
    setDados(id);
    setOpenDetalhe(true);
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
      <Card background="rgba(31, 99, 87,0.8)" marginTop="4rem">
        <ContainerListaVagas>
          <BoxDetalhe>
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
            <ButtonAdd onClick={handleCadastrarVaga}>
            <AddIcon />
              Adicionar
            </ButtonAdd>
          </BoxDetalhe>

          <ContainerTabela>
            <BoxTabelaTitle>
              <LinhaTitle>Status</LinhaTitle>
              <LinhaTitle>Vagas</LinhaTitle>
              <LinhaTitle>Descrição</LinhaTitle>
              <LinhaTitle>Ação</LinhaTitle>
            </BoxTabelaTitle>
            <BoxColuna>
              {Object.keys(searchResult)
                .sort((a, b) =>
                  searchResult[a].nome < searchResult[b].nome ? -1 : 0
                )
                .map((e) => (
                  <>
                    <BoxTabela key={searchResult[e].id}>
                      <LinhaTabela>
                        {searchResult[e].status === "Ativo" ? (
                          <BoxIconStatus color="var(--primary-color)">
                            <CheckCircleOutlineIcon />
                          </BoxIconStatus>
                        ) : (
                          <BoxIcon color="var(--error-color)">
                            <NotInterestedIcon />
                          </BoxIcon>
                        )}
                      </LinhaTabela>
                      <LinhaTabela>{searchResult[e].nome}</LinhaTabela>
                      <LinhaTabela>{searchResult[e].descricao}</LinhaTabela>
                      <LinhaTabela>
                        <BoxIcon
                          onClick={() => handleOpenDetalhe(searchResult[e])}
                          onChange={handleOpenDetalhe}
                          color="var(--primary-color)"
                        >
                          <NoteIcon />
                        </BoxIcon>
                        <BoxIcon
                          onClick={() => handleOpen(searchResult[e])}
                          onChange={handleOpen}
                          color="var(--alert-color)"
                        >
                          <EditIcon />
                        </BoxIcon>
                        <BoxIcon
                          onClick={() => handleDelete(searchResult[e].id)}
                          onChange={handleOpen}
                          color="var(--error-color)"
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
      </Card>
      {open ? <EditarVagas {...{ setOpen, lista, dados }} /> : null}
      {openDetalhe ? (
        <DetalheCadastroVagas {...{ setOpenDetalhe, lista, dados }} />
      ) : null}
      {cadastrar ? <CadastrarVagas {...{ cadastrar, setCadastrar }} /> : null}
    </>
  );
}

export default ListaCadastroVagas;
