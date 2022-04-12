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
import Card from "../../Card";

import { mascCPF } from "../../../services/mascara";
import InputMask from "react-input-mask";

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

function EditarCandidato(props) {
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

  //api.get("candidato/candidato").then((res) => console.log(res.data));

  //Config Mask
  const MaskInput = (props) => (
    <InputMask {...props}>
      {(inputProps) => <InputFields {...inputProps} />}
    </InputMask>
  );
  const handleMask = (ev, setFieldValue) => {
    const { name, value } = ev.target || "";
    setFieldValue(name, value);
  };

  return (
    <>
      <Card padding="0px" marginTop="20px" >
        <Formik
          validationSchema={validationSchema}
          initialValues={inicial}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              await api.post("candidato/candidato", values).then((res) => {
                setSubmitting(false);
                return alert("inserido");
              });
            }, 400);
          }}
        >
          {({
            errors,
            touched,
            isSubmitting,
            values,
            handleSubmit,
            handleChange,
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
                      color="#1f6357"
                    />
                  </BoxSingleInput>
                  <BoxSingleInput>
                    <InputFields
                      name="nomeSocial"
                      label="Nome Social:"
                      padding=" 0 10px"
                      nameError="nomeSocial"
                      color="#1f6357"
                    />
                  </BoxSingleInput>
                  <BoxSingleInput>
                  <InputMask mask="99/99/99" maskPlaceholder={null}/>
                    <MaskInput
                      mask="999.999.999-99"
                      maskPlaceholder={null}
                      name="cpf"
                      label="CPF:"
                      padding=" 0 10px"
                      nameError="cpf"
                      color="#1f6357"
                      onChange={(ev) => handleMask(ev,setFieldValue)}
                    />

                    <MaskInput
                      mask="99.999.999-9"
                      name="rg"
                      label="RG:"
                      padding=" 0 10px"
                      nameError="rg"
                      color="#1f6357"
                      onChange={(ev) => handleMask(ev,setFieldValue)}
                    />
                    <InputFields
                      name="dataNascimento"
                      label="Data Nascimento:"
                      padding=" 0 10px"
                      nameError="dataNascimento"
                      color="#1f6357"
                      type="date"
                    />
                  </BoxSingleInput>
                  <BoxSingleInput>
                    <InputFields
                      name="genero"
                      label="Genero:"
                      padding=" 0 10px"
                      nameError="genero"
                      color="#1f6357"
                      component="select"
                    >
                      {listaGenero}
                    </InputFields>
                    <InputFields
                      name="estadoCivil"
                      label="Estado Civil:"
                      padding=" 0 10px"
                      color="#1f6357"
                      nameError="estadoCivil"
                      component="select"
                    >
                      {listaCivil}
                    </InputFields>
                    <InputFields
                      name="nacionalidade"
                      label="Nacionalidade:"
                      padding=" 0 10px"
                      color="#1f6357"
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
                    <MaskInput
                      mask="99999-999"
                      flex="1"
                      name="cep"
                      label="CEP:"
                      padding=" 0 10px"
                      nameError="cep"
                      onBlur={(ev) => BuscarCEP(ev, setFieldValue)}
                      color="#1f6357"
                      onChange={(ev) => handleMask(ev,setFieldValue)}
                    />
                    <InputFields
                      flex="2"
                      name="logradouro"
                      label="Endereço:"
                      padding=" 0 10px"
                      nameError="logradouro"
                      color="#1f6357"
                    />
                  </BoxSingleInput>
                  <BoxSingleInput>
                    <InputFields
                      flex="1"
                      name="bairro"
                      label="Bairro:"
                      padding=" 0 10px"
                      nameError="bairro"
                      color="#1f6357"
                    />
                    <InputFields
                      flex="2"
                      name="complemento"
                      label="Complemento:"
                      padding=" 0 10px"
                      nameError="complemento"
                      color="#1f6357"
                    />
                  </BoxSingleInput>
                  <BoxSingleInput>
                    <InputFields
                      name="cidade"
                      label="Cidade:"
                      padding=" 0 10px"
                      nameError="cidade"
                      color="#1f6357"
                    />
                    <InputFields
                      name="estado"
                      label="Estado:"
                      padding=" 0 10px"
                      nameError="estado"
                      color="#1f6357"
                    />
                  </BoxSingleInput>
                </SubBoxForm>
                <SubBoxForm>
                  <SubText>Contato</SubText>
                  <BoxSingleInput>
                    <MaskInput
                    mask="(99) 9 9999-9999"
                      name="celular"
                      label="Celular:"
                      padding=" 0 10px"
                      nameError="celular"
                      color="#1f6357"
                      onChange={(ev) => handleMask(ev,setFieldValue)}
                    />
                    <InputFields
                      name="emailString"
                      label="E-mail:"
                      padding=" 0 10px"
                      nameError="emailString"
                      color="#1f6357"
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
                      color="#1f6357"
                    />
                    <InputFields
                      name="instagram"
                      label="Instagram:"
                      padding=" 0 10px"
                      nameError="instagram"
                      color="#1f6357"
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
                      color="#1f6357"
                    />
                    <InputFields
                      name="confirmacaoSenha"
                      label="Confirma a Senha:"
                      padding=" 0 10px"
                      nameError="confirmacaoSenha"
                      color="#1f6357"
                      type="password"
                    />
                  </BoxSingleInput>
                </SubBoxForm>
              </BoxForm>
              <Buttons
                variant="contained"
                disabled={isSubmitting}
                type="submit"
              >
                Editar
              </Buttons>
            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
}

export default EditarCandidato;
