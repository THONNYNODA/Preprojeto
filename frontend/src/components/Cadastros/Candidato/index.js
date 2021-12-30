import { MenuItem } from "@mui/material";
import React, { useState } from "react";
import { listasPaises } from "../../../services/listaPaises";
import * as yup from "yup";
import { Field } from "formik";
import { Select } from "formik-mui";
import Formularios from "../../Formulario";
import InputFields from "../../Input";
import { BoxForm, ContainerCadastro, ContainerForm } from "./styles";
import { InputSelect } from "../../Input/styles";

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
              placeholder="Insira o seu Nome"
              color="#fff"
              width="100%"
            />
          </BoxForm>
          <BoxForm>
            <InputFields
              label="Nome Social"
              name="nomeSocial"
              placeholder="Insira o seu Nome Social"
              width="100%"
              color="#fff"
            />
          </BoxForm>
          <BoxForm>
            <InputFields
              label="CPF"
              name="cpf"
              placeholder="Insira o seu CPF"
              width="100%"
              color="#fff"
            />
            <InputFields
              label="RG"
              name="rg"
              placeholder="Insira o seu RG"
              width="100%"
              color="#fff"
            />
            <InputFields
              label="Data de Nascimento"
              name="dataNascimento"
              type="date"
              color="#fff"
              width="100%"
            />
          </BoxForm>
          <BoxForm>
            <InputFields
              label="Nacionalidade"
              name="nacionalidade"
              placeholder="Insira o seu Nacionalidade"
              width="100%"
              color="#fff"
              select
            />
            <InputFields
              label="Estado Civil"
              name="estadoCivil"
              placeholder="Insira o seu Estado Civil"
              width="100%"
              color="#fff"
            />
            <InputFields
              label="Genero"
              name="genero"
              placeholder="Insira o seu Genero"
              color="#fff"
              width="100%"
            />
          </BoxForm>
          <BoxForm>
            <InputFields
              label="Celular"
              name="celular"
              placeholder="Insira o seu Celular"
              width="100%"
              color="#fff"
            />
            <InputFields
              label="Email"
              name="emailString"
              placeholder="Insira o seu Email"
              width="100%"
              color="#fff"
            />
            <InputFields
              label="Genero"
              name="genero"
              placeholder="Insira o seu Genero"
              color="#fff"
              width="100%"
              type="select"
              component={Select}
            />
          </BoxForm>
        </Formularios>
      </ContainerForm>
    </ContainerCadastro>
  );
}

export default Candidato;
