import React, { useEffect, useState } from "react";
import axios from "axios";
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
} from "./styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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

  // useEffect(() => {
  //   api.get("/vaga/vagas").then((res) => console.log(res));
  // }, []);

  useEffect(() => {
    const result = lista.filter(
      (person) =>
        person.name
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

  function Teste(props) {
    const [valor, setValor] = useState();

   
     const handleValor = (valor) => {
      // switch (valor) {
      //   case "menor18":
      //     var arr1 = props.lista.filter((e) => e.id.toString() <= 5);
      //     props.setSearchResult(arr1);
      //     break;
      //   case "18a25":
      //     var arr2 = props.lista.filter(
      //       (e) => e.id.toString() > 5 && e.id.toString() <= 8
      //     );
      //     props.setSearchResult(arr2);
      //     break;
      //   case "25maior":
      //     var arr3 = props.lista.filter((e) => e.id.toString() > 8);
      //     props.setSearchResult(arr3);
      //     break;
      //   default:
      //     props.setSearchResult(props.lista);
      //     break;
      // }
      if (valor === "menor18") {
        var arr1 = props.lista.filter((e) => e.id.toString() <= 5);
        props.setSearchResult(arr1);
      } else if (valor === "18a25") {
        var arr2 = props.lista.filter(
          (e) => e.id.toString() > 5 && e.id.toString() <= 8
        );
        props.setSearchResult(arr2);
      } else if (valor === "25maior") {
        var arr3 = props.lista.filter((e) => e.id.toString() > 8);
        props.setSearchResult(arr3);
      }
    };
   

    return (
      <FormControl>
        <FormLabel>idade</FormLabel>

        <RadioGroup
          //defaultValue="menor18"
          name={valor}
          onChange={(e) => {
            setValor(e.target.value);
            handleValor(valor);
          }}
        >
          <FormControlLabel
            value="menor18"
            control={<Radio />}
            label="Menor de 18 anos"
          />
          <FormControlLabel
            value="18a25"
            control={<Radio />}
            label="18 a 25 anos"
          />
          <FormControlLabel
            value="25maior"
            control={<Radio />}
            label="maior de 25"
          />
        </RadioGroup>
      </FormControl>
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
      <Teste
        {...{ open, setOpen, lista, idAtual, searchResult, setSearchResult }}
      />

      <ContainerTabela>
        <BoxTabelaTitle>
          <LinhaTitle>Nome</LinhaTitle>
          <LinhaTitle>Idade</LinhaTitle>
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
                  <LinhaTabela>{searchResult[e].id}</LinhaTabela>
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
