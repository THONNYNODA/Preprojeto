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
import { Field, Form, Formik } from "formik";

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

  function BuscarCEP(ev, setFieldValue) {
    const { value } = ev.target;
    const cep = value.replace(/[^0-9]/, "");

    if (cep.length !== 8) {
      return;
    }

    //Buscando o CEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        
        setFieldValue("logradouro", data.logradouro);
        setFieldValue("complemento", data.complemento);
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
        setFieldValue("estado", data.uf);
      });
  }

  api.get("candidato/candidato").then(res => console.log(res.data))

  return (
    <>
      <ContainerCadastro>
        <BoxText>
          <Title color="#ffffff">Cadastre-se</Title>
          <Text color="#ffffff">Faça o seu cadastro para acessar o nosso sistema de vagas</Text>
        </BoxText>
        <Divisorio height="1px" />
        <Formik
          validationSchema={validationSchema}
          initialValues={inicial}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
             await api.post("candidato/candidato", values).then(res =>{
                setSubmitting(false)
                return alert("inserido")
              })
            }, 400);
          }}
        >
          {({
            errors,
            touched,
            isSubmitting,
            values,
            handleSubmit,
            setFieldValue,
          }) => (
            <Form onSubmit={handleSubmit}>
              <BoxForm>
                <SubBoxForm>
                  <SubText>Dados Pessoais</SubText>
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
                    <InputFields
                      name="dataNascimento"
                      label="Data Nascimento:"
                      padding=" 0 10px"
                      nameError="dataNascimento"
                      //color="#fff"
                      type="date"
                    />
                  </BoxSingleInput>
                  <BoxSingleInput>
                    <InputFields
                      name="genero"
                      label="Genero:"
                      padding=" 0 10px"
                      nameError="genero"
                      //color="#fff"
                      component="select"
                    >
                      {listaGenero}
                    </InputFields>
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
                </SubBoxForm>
                <SubBoxForm>
                  <SubText>Endereço</SubText>
                  <BoxSingleInput>
                    <InputFields
                      flex="1"
                      name="cep"
                      label="CEP:"
                      padding=" 0 10px"
                      nameError="cep"
                      onBlur={(ev) => BuscarCEP(ev, setFieldValue)}
                      //color="#fff"
                    />
                    <InputFields
                      flex="2"
                      name="logradouro"
                      label="Endereço:"
                      padding=" 0 10px"
                      nameError="logradouro"
                      //color="#fff"
                    />
                  </BoxSingleInput>
                  <BoxSingleInput>
                    <InputFields
                      flex="1"
                      name="bairro"
                      label="Bairro:"
                      padding=" 0 10px"
                      nameError="bairro"
                      //color="#fff"
                    />
                    <InputFields
                      flex="2"
                      name="complemento"
                      label="Complemento:"
                      padding=" 0 10px"
                      nameError="complemento"
                      //color="#fff"
                    />
                  </BoxSingleInput>
                  <BoxSingleInput>
                    <InputFields
                      name="cidade"
                      label="Cidade:"
                      padding=" 0 10px"
                      nameError="cidade"
                      //color="#fff"
                    />
                    <InputFields
                      name="estado"
                      label="Estado:"
                      padding=" 0 10px"
                      nameError="estado"
                      //color="#fff"
                    />
                  </BoxSingleInput>
                </SubBoxForm>
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
                      nameError="facebook"
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
                <SubBoxForm>
                  <SubText>Criar uma senha</SubText>
                  <BoxSingleInput>
                    <InputFields
                      name="senha"
                      label="Senha:"
                      padding=" 0 10px"
                      nameError="senha"
                      type="password"
                      //color="#fff"
                    />
                    <InputFields
                      name="confirmacaoSenha"
                      label="Confirma a Senha:"
                      padding=" 0 10px"
                      nameError="confirmacaoSenha"
                      //color="#fff"
                      type="password"
                    />
                  </BoxSingleInput>
                </SubBoxForm>
              </BoxForm>
              <Buttons variant="contained" disabled={isSubmitting} type="submit">Cadastrar</Buttons>
            </Form>
          )}
        </Formik>
      </ContainerCadastro>
    </>
  );
}

export default Candidato;
