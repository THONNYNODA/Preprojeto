import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BoxNoticia,
  ContainerNoticia,
  TextNoticia,
  MiniTextNoticia,
  CardNoticia,
} from "./styles";

import Card from '../Card'

function Noticias(props) {
  const [lista, setLista] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setLista(res.data));
  }, []);

  function Datas(data) {
    const formatoData = (n) => {
      const formato = ("0" + n).slice(-2);
      return formato;
    };
    const dia = formatoData(new Date(data).getDate());
    const mes = formatoData(new Date(data).getMonth() + 1);
    const ano = new Date(data).getFullYear();

    const dados = `${dia}/${mes}/${ano}`;

    return dados;
  }

  return (
    <Card  title="Ultimas Notíci" padding="0px " background="rgba(31, 99, 87,0.8)">
      <ContainerNoticia>
        {Object.keys(lista).map((e) => (
          <CardNoticia>
            <BoxNoticia>
              <TextNoticia>Novas vagas</TextNoticia>
              <MiniTextNoticia>
                {Datas("Sun Dec 17 1995 03:24:00 GMT-0200")}
              </MiniTextNoticia>
            </BoxNoticia>
            <p>Tec enfermagem</p>
          </CardNoticia>
        ))}
      </ContainerNoticia>
    </Card>
  );
}
export default Noticias;
