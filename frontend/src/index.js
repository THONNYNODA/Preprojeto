import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    vagas: Model,
  },

  seeds(server) {
    server.db.loadData({
      vagas: [
        {
          id: 1,
          nome: "Enfermagem",
          descricao: "E uma area da saude onde o proficional tem que exercer ",
          horasSemanais: "44horas",
          diasSemanais: "Segunda a Sexta",
          turno: "Noturno",
          remuneracao: 1700,
          endereco: "av Angelo Moreira da Fonseca",
          requisitos: "Curso Superior Completo ",
          regime: "lorem ipsulo cs",
          status: true,
        },
        {
          id: 2,
          nome: "Farmacia",
          descricao: "E uma area da saude onde o proficional tem que exercer ",
          horasSemanais: "44horas",
          diasSemanais: "Segunda a Sabado",
          turno: "Diurno",
          remuneracao: 1700,
          endereco: "av Angelo Moreira da Fonseca",
          requisitos: "Curso Superior Completo ",
          regime: "lorem ipsulo cs",
          status: false,
        },
        {
          id: 3,
          nome: "Informatica",
          descricao: "E uma area da saude onde o proficional tem que exercer ",
          horasSemanais: "44horas",
          diasSemanais: "Segunda a Sabado",
          turno: "Diurno",
          remuneracao: 1200,
          endereco: "av Angelo Moreira da Fonseca",
          requisitos: "Curso Superior Completo ",
          regime: "lorem ipsulo cs",
          status: false,
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/vagas", () => {
      return this.schema.all("vagas");
    });
  },
});

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
