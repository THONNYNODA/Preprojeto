import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import axios from "axios";
import {
  BoxIcon,
  BoxTabela,
  ContainerTabela,
  LinhaTabela,
  IconSeach,
  InputSeach,
  BoxSeach,
} from "./styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";

import { ContainerDashbord } from "./styles";

function Dashbord() {
  const [lista, setLista] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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
  }, [pesquisa]);

  return (
    <Grid container>
      <Header />
      <ContainerDashbord>
        <Card title="Vagas Abertas">
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

          {Object.keys(searchResult)
            .sort((a, b) =>
              searchResult[a].name < searchResult[b].name ? -1 : 0
            )
            .map((e) => (
              <ContainerTabela>
                <BoxTabela>
                  <LinhaTabela>{searchResult[e].name}</LinhaTabela>
                  <LinhaTabela>
                    <BoxIcon>
                      <PersonAddIcon />
                    </BoxIcon>
                  </LinhaTabela>
                </BoxTabela>
              </ContainerTabela>
            ))}
        </Card>
      </ContainerDashbord>
    </Grid>
  );
}

export default Dashbord;
