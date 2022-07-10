import React, { useEffect, useState } from "react";
import { BoxCard } from "./styles";
import DetalheVagas from "../DetalheVaga"
import api from "../../services/api";

export default function CardVagas(props) {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    api.get("/vaga/vagas").then((res) => setDados(res.data));
  }, []);

  return (
    <>
      {dados
        .filter((dados) => dados.status === "ativo")
        .map((dado) => (
          <BoxCard key={dado.id}>
            <header>
              <strong> {dado.nome} </strong>
            </header>
            <main>
              <p>Período: {dado.turnoTrabalho}</p>
              <p>Descricão da vaga: <span>{dado.descricao}</span></p>
              <button>Ver</button>
            </main>
          </BoxCard>
        ))}
        {<DetalheVagas/>}
    </>
  );
}
