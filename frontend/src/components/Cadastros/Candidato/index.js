import React, { useState } from "react";
import { listasPaises } from "../../../services/listaPaises";
import * as yup from "yup";
import Formulario from "../../Formulario";
import InputFields from "../../Input";
import {
  BoxForm,
  BoxSingleInput,
  BoxText,
  Buttons,
  ContainerCadastro,
  ContainerFilter,
  ContainerForm,
  Divisorio,
  SubBoxForm,
  SubText,
  Text,
  Title,
} from "./styles";
import { ContainerField, TextErrors } from "../../Input/styles";
import api from "../../../services/api";

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

  const listaGenero = Genero.map((e) => <option value={e}>{e}</option>);
  const listaCivil = civil.map((e) => <option value={e}>{e}</option>);
  const listaNacionalidade = listasPaises.map((e) => (
    <option value={e.gentilico}>{e.gentilico}</option>
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
    <>
      <ContainerCadastro>
        <BoxText>
          <Title color="#fd5956">Cadastre-se</Title>
          <Text>Faça o seu cadastro para acessar o nosso sistema de vagas</Text>
        </BoxText>
        <Divisorio height="1px" />
        <Formulario
          validationSchema={validationSchema}
          initialValues={inicial}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <BoxForm>
            <BoxSingleInput>
              <InputFields
                name="nome"
                label="Nome:"
                padding=" 0 10px"
                nameError="nome"
                //color="#fff"
              />
            </BoxSingleInput>
            <BoxSingleInput>
              <InputFields
                name="nomeSocial"
                label="Nome Social:"
                padding=" 0 10px"
                nameError="nomeSocial"
                //color="#fff"
              />
            </BoxSingleInput>
            <BoxSingleInput>
              <InputFields
                name="cpf"
                label="CPF:"
                padding=" 0 10px"
                nameError="cpf"
                //color="#fff"
              />
              <InputFields
                name="rg"
                label="RG:"
                padding=" 0 10px"
                nameError="rg"
                //color="#fff"
              />
            </BoxSingleInput>
            <BoxSingleInput>
              <InputFields
                name="dataNascimento"
                label="Data Nascimento:"
                padding=" 0 10px"
                nameError="dataNascimento"
                //color="#fff"
                type="date"
              />
              <InputFields
                name="estadoCivil"
                label="Estado Civil:"
                padding=" 0 10px"
                //color="#fff"
                nameError="estadoCivil"
                component="select"
              >
                {listaCivil}
              </InputFields>
              <InputFields
                name="nacionalidade"
                label="Nacionalidade:"
                padding=" 0 10px"
                //color="#fff"
                component="select"
                nameError="nacionalidade"
              >
                {listaNacionalidade}
              </InputFields>
            </BoxSingleInput>
            <SubBoxForm>
              <SubText>Contato</SubText>
              <BoxSingleInput>
              <InputFields
                name="celular"
                label="Celular:"
                padding=" 0 10px"
                nameError="celular"
                //color="#fff"
              />
              <InputFields
                name="emailString"
                label="E-mail:"
                padding=" 0 10px"
                nameError="emailString"
                //color="#fff"
              />
            </BoxSingleInput>
            </SubBoxForm>
            <SubBoxForm>
              <SubText>Rede Sociais</SubText>
              <BoxSingleInput>
              <InputFields
                name="facebook"
                label="Facebook:"
                padding=" 0 10px"
                nameError="celular"
                //color="#fff"
              />
              <InputFields
                name="instagram"
                label="Instagram:"
                padding=" 0 10px"
                nameError="instagram"
                //color="#fff"
              />
            </BoxSingleInput>
            </SubBoxForm>
          </BoxForm>
          <Buttons>Cadastrar</Buttons>
        </Formulario>
      </ContainerCadastro>
    </>
  );
}

export default Candidato;
