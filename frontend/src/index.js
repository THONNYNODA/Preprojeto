import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from "miragejs";

// createServer({
//   models: {
//     vagas: Model,
//     candidatos:Model,
//   },

//   seeds(server) {
//     server.db.loadData({
//       vagas: [
//         {
//           id: 1,
//           nome: "Enfermagem",
//           descricao: "E uma area da saude onde o proficional tem que exercer ",
//           horasSemanais: "44horas",
//           diasSemanais: "Segunda a Sexta",
//           turno: "Noturno",
//           remuneracao: 1700,
//           endereco: "av Angelo Moreira da Fonseca",
//           requisitos: "Curso Superior Completo ",
//           regime: "lorem ipsulo cs",
//           status: "Ativo",
//         },
//         {
//           id: 2,
//           nome: "Farmacia",
//           descricao: "E uma area da saude onde o proficional tem que exercer ",
//           horasSemanais: "44horas",
//           diasSemanais: "Segunda a Sabado",
//           turno: "Diurno",
//           remuneracao: 1700,
//           endereco: "av Angelo Moreira da Fonseca",
//           requisitos: "Curso Superior Completo ",
//           regime: "lorem ipsulo cs",
//           status: "Desativado",
//         },
//         {
//           id: 3,
//           nome: "Informatica",
//           descricao: "E uma area da saude onde o proficional tem que exercer ",
//           horasSemanais: "44horas",
//           diasSemanais: "Segunda a Sabado",
//           turno: "Diurno",
//           remuneracao: 1200,
//           endereco: "av Angelo Moreira da Fonseca",
//           requisitos: "Curso Superior Completo ",
//           regime: "lorem ipsulo cs",
//           status: "Ativo",
//         },
//       ],
//       candidatos:[
//         {
//           id: 1,
//           bairro: "Zona I",
//           celular: "(44) 9 8800-2045",
//           cep: "87501-030",
//           cidade: "Umuarama",
//           complemento: "até 4567/4568",
//           confirmacao_senha: "12345678",
//           cpf: "111.111.111-11",
//           data_nascimento: "1992-05-01 21:00:00.000000",
//           email_string: "tonr@noda",
//           estado: "PR",
//           estado_civil: "Casado(a)",
//           facebook: "@noda",
//           genero: "Masculino",
//           instagram: "@noda.thonny",
//           logradouro: "Avenida Paraná",
//           nacionalidade: "alemã",
//           nome: "Tony Takeharo Noda",
//           nome_social: "",
//           rg: "99.945.456-4",
//           senha: "12345678"
//         },
//         {
//           id: 2,
//           bairro: "Zona I",
//           celular: "(44) 9 8800-2045",
//           cep: "87501-030",
//           cidade: "Umuarama",
//           complemento: "até 4567/4568",
//           confirmacao_senha: "12345678",
//           cpf: "111.111.111-11",
//           data_nascimento: "2000-05-01 21:00:00.000000",
//           email_string: "tonr@noda",
//           estado: "PR",
//           estado_civil: "Casado(a)",
//           facebook: "@noda",
//           genero: "Feminino",
//           instagram: "@noda.thonny",
//           logradouro: "Avenida Paraná",
//           nacionalidade: "alemã",
//           nome: "Maria Clara",
//           nome_social: "",
//           rg: "99.945.456-4",
//           senha: "12345678"
//         },
//         {
//           id: 3,
//           bairro: "Zona I",
//           celular: "(44) 9 8800-2045",
//           cep: "87501-030",
//           cidade: "Cianorte",
//           complemento: "até 4567/4568",
//           confirmacao_senha: "12345678",
//           cpf: "111.111.111-11",
//           data_nascimento: "2010-05-01 21:00:00.000000",
//           email_string: "tonr@noda",
//           estado: "PR",
//           estado_civil: "Casado(a)",
//           facebook: "@noda",
//           genero: "Masculino",
//           instagram: "@noda.thonny",
//           logradouro: "Avenida Paraná",
//           nacionalidade: "alemã",
//           nome: "Jeferson da Silva",
//           nome_social: "",
//           rg: "99.945.456-4",
//           senha: "12345678"
//         },
//         {
//           id: 4,
//           bairro: "Zona I",
//           celular: "(44) 9 8800-2045",
//           cep: "87501-030",
//           cidade: "Cianorte",
//           complemento: "até 4567/4568",
//           confirmacao_senha: "12345678",
//           cpf: "111.111.111-11",
//           data_nascimento: "2010-05-01 21:00:00.000000",
//           email_string: "tonr@noda",
//           estado: "PR",
//           estado_civil: "Casado(a)",
//           facebook: "@noda",
//           genero: "Masculino",
//           instagram: "@noda.thonny",
//           logradouro: "Avenida Paraná",
//           nacionalidade: "alemã",
//           nome: "Jeferson da Silva",
//           nome_social: "",
//           rg: "99.945.456-4",
//           senha: "12345678"
//         },
//         {
//           id: 5,
//           bairro: "Zona I",
//           celular: "(44) 9 8800-2045",
//           cep: "87501-030",
//           cidade: "Cianorte",
//           complemento: "até 4567/4568",
//           confirmacao_senha: "12345678",
//           cpf: "111.111.111-11",
//           data_nascimento: "2010-05-01 21:00:00.000000",
//           email_string: "tonr@noda",
//           estado: "PR",
//           estado_civil: "Casado(a)",
//           facebook: "@noda",
//           genero: "Masculino",
//           instagram: "@noda.thonny",
//           logradouro: "Avenida Paraná",
//           nacionalidade: "alemã",
//           nome: "Jeferson da Silva",
//           nome_social: "",
//           rg: "99.945.456-4",
//           senha: "12345678"
//         },
//         {
//           id: 6,
//           bairro: "Zona I",
//           celular: "(44) 9 8800-2045",
//           cep: "87501-030",
//           cidade: "Cianorte",
//           complemento: "até 4567/4568",
//           confirmacao_senha: "12345678",
//           cpf: "111.111.111-11",
//           data_nascimento: "2010-05-01 21:00:00.000000",
//           email_string: "tonr@noda",
//           estado: "PR",
//           estado_civil: "Casado(a)",
//           facebook: "@noda",
//           genero: "Masculino",
//           instagram: "@noda.thonny",
//           logradouro: "Avenida Paraná",
//           nacionalidade: "alemã",
//           nome: "Jeferson da Silva",
//           nome_social: "",
//           rg: "99.945.456-4",
//           senha: "12345678"
//         },
//         {
//           id: 7,
//           bairro: "Zona I",
//           celular: "(44) 9 8800-2045",
//           cep: "87501-030",
//           cidade: "Cianorte",
//           complemento: "até 4567/4568",
//           confirmacao_senha: "12345678",
//           cpf: "111.111.111-11",
//           data_nascimento: "2010-05-01 21:00:00.000000",
//           email_string: "tonr@noda",
//           estado: "PR",
//           estado_civil: "Casado(a)",
//           facebook: "@noda",
//           genero: "Masculino",
//           instagram: "@noda.thonny",
//           logradouro: "Avenida Paraná",
//           nacionalidade: "alemã",
//           nome: "Jeferson da Silva",
//           nome_social: "",
//           rg: "99.945.456-4",
//           senha: "12345678"
//         },
//       ]
//     });
//   },

//   routes() {
//     this.namespace = "api";
//     this.get("/vagas", () => {
//       return this.schema.all("vagas");
//     });
//     this.get('/candidatos', () => {
//       return this.schema.all('candidatos')
//     })
//   },
// });

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
