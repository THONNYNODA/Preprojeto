import { MenuItem } from "@mui/material";
import React, { useState } from "react";
import { listasPaises } from "../../../services/listaPaises";
import * as yup from "yup";
import { Field } from "formik";
import { TextField } from "formik-mui";
import Formularios from "../../Formulario";
import InputFields from "../../Input";
import { BoxForm, ContainerCadastro, ContainerForm } from "./styles";

const validationSchema = yup.object().shape({
  nome: yup.string().required("Campo e obrigatorio"),
  dataNascimento: yup.date().required("Campo e obrigatorio"),
  estadoCivil: yup.string().required("Campo e obrigatorio"),
  nacionalidade: yup.string().required("Campo e obrigatorio"),
  genero: yup.string().required("Campo e obrigatorio"),
  //nomeSocial: yup.string().required("Campo e obrigatorio"),
  logradouro: yup.string().required("Campo e obrigatorio"),
  cep: yup.string().required("Campo e obrigatorio"),
  bairro: yup.string().required("Campo e obrigatorio"),
  estado: yup.string().required("Campo e obrigatorio"),
  cidade: yup.string().required("Campo e obrigatorio"),
  emailString: yup.string().required("Campo e obrigatorio"),
  celular: yup.string().required("Campo e obrigatorio"),
  cpf: yup.string().required("Campo e obrigatorio"),
  rg: yup.string().required("Campo e obrigatorio"),
  instagram: yup.string().required("Campo e obrigatorio"),
  facebook: yup.string().required("Campo e obrigatorio"),
  senha: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .required("Campo e obrigatorio"),
  confirmacaoSenha: yup
    .string()
    .oneOf([yup.ref("senha")], "A senha nao confirma")
    .required("Campo e obrigatorio"),
});

function Candidato(props) {
  const [view, setView] = useState();

  const Genero = ["Masculino", "Feminino", "Outros"];
  const civil = ["Solteiro(a)", "Casado(a)", "Viúvo(a)"];

  const listaGenero = Genero.map((e) => (
    <MenuItem value={e}>{e.toLocaleUpperCase()}</MenuItem>
  ));
  const listaCivil = civil.map((e) => (
    <MenuItem value={e}>{e.toLocaleUpperCase()}</MenuItem>
  ));
  const Nacionalidade = listasPaises.map((e) => (
    <MenuItem value={e.gentilico}>{e.gentilico.toLocaleUpperCase()}</MenuItem>
  ));

  const handleShowSenha = () => {
    setView(!view);
  };

  const inicial = {
    nome: "",
    dataNascimento: "",
    estadoCivil: "",
    nacionalidade: "",
    genero: "",
    nomeSocial: "",
    logradouro: "",
    cep: "",
    bairro: "",
    complemento: "",
    estado: "",
    cidade: "",
    emailString: "",
    celular: "",
    cpf: "",
    rg: "",
    instagram: "",
    facebook: "",
    senha: "",
    confirmacaoSenha: "",
  };

  return (
    <ContainerCadastro>
      <ContainerForm>
        <Formularios
          validationSchema={validationSchema}
          initialValues={inicial}
          submit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <BoxForm>
            <InputFields
              label="Nome"
              name="nome"
              placeholder="Insira o seu nome"
              color="#fff"
              width="100%"
            />
            <InputFields
              label="Data de Nascimento"
              name="dataNascimento"
              type="date"
              color="#fff"
            />
          </BoxForm>
        </Formularios>
      </ContainerForm>
    </ContainerCadastro>
  );
}

export default Candidato;
