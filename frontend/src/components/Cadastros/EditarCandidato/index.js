import React, { useState } from "react";
import { listasPaises } from "../../../services/listaPaises";
import * as yup from "yup";
import InputFields from "../../Input";
import {
  BoxForm,
  BoxSingleInput,
  Buttons,
  SubBoxForm,
  SubText,
} from "./styles";
import {BoxIconShow } from "../../Input/styles";
import api from "../../../services/api";
import { Form, Formik } from "formik";
import Card from "../../Card";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import InputMask from "react-input-mask";
import axios from "axios";

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
  const [showPass, setShowPass] = useState(true);

  const Genero = ["Masculino", "Feminino", "Outros"];
  const civil = ["Solteiro(a)", "Casado(a)", "Vi??vo(a)"];

  const listaGenero = Genero.map((e) => <option value={e}>{e}</option>);
  const listaCivil = civil.map((e) => <option value={e}>{e}</option>);
  const listaNacionalidade = listasPaises.map((e) => (
    <option value={e.gentilico}>{e.gentilico}</option>
  ));

  const handleShowPass = () => {
    setShowPass(!showPass);
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
    <InputMask maskChar={null} {...props}>
      {(inputProps) => <InputFields {...inputProps} />}
    </InputMask>
  );

  const handleMask = (ev, setFieldValue) => {
    const { name, value } = ev.target || "";
    setFieldValue(name, value);
  };

  return (
    <>
      <Card padding="0" margintop="2rem" maxwidth="57rem">
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
                      padding=" 0 1rem"
                      nameError="nome"
                      color="var(--primary-color)"
                    />
                  </BoxSingleInput>
                  <BoxSingleInput>
                    <InputFields
                      name="nomeSocial"
                      label="Nome Social:"
                      padding=" 0 1rem"
                      nameError="nomeSocial"
                      color="var(--primary-color)"
                    />
                  </BoxSingleInput>
                  <BoxSingleInput>
                    <MaskInput
                      mask="999.999.999-99"
                      name="cpf"
                      label="CPF:"
                      padding=" 0 1rem"
                      nameError="cpf"
                      color="var(--primary-color)"
                      onChange={(ev) => handleMask(ev, setFieldValue)}
                    />
                  
                    <MaskInput
                      mask="99.999.999-9"
                      name="rg"
                      label="RG:"
                      padding=" 0 1rem"
                      nameError="rg"
                      color="var(--primary-color)"
                      onChange={(ev) => handleMask(ev, setFieldValue)}
                    />
                    <InputFields
                      name="dataNascimento"
                      label="Data Nascimento:"
                      padding=" 0 1rem"
                      nameError="dataNascimento"
                      color="var(--primary-color)"
                      type="date"
                    />
                  </BoxSingleInput>
                  <BoxSingleInput>
                    <InputFields
                      name="genero"
                      label="Genero:"
                      padding=" 0 1rem"
                      nameError="genero"
                      color="var(--primary-color)"
                      component="select"
                    >
                      {listaGenero}
                    </InputFields>
                    <InputFields
                      name="estadoCivil"
                      label="Estado Civil:"
                      padding=" 0 1rem"
                      color="var(--primary-color)"
                      nameError="estadoCivil"
                      component="select"
                    >
                      {listaCivil}
                    </InputFields>
                    <InputFields
                      name="nacionalidade"
                      label="Nacionalidade:"
                      padding=" 0 1rem"
                      color="var(--primary-color)"
                      component="select"
                      nameError="nacionalidade"
                    >
                      {listaNacionalidade}
                    </InputFields>
                  </BoxSingleInput>
                </SubBoxForm>
                <SubBoxForm>
                  <SubText>Endere??o</SubText>
                  <BoxSingleInput>
                    <MaskInput
                      mask="99999-999"
                      flex="1"
                      name="cep"
                      label="CEP:"
                      padding=" 0 1rem"
                      nameError="cep"
                      onBlur={(ev) => BuscarCEP(ev, setFieldValue)}
                      color="var(--primary-color)"
                      onChange={(ev) => handleMask(ev, setFieldValue)}
                    />
                    <InputFields
                      flex="2"
                      name="logradouro"
                      label="Endere??o:"
                      padding=" 0 1rem"
                      nameError="logradouro"
                      color="var(--primary-color)"
                    />
                  </BoxSingleInput>
                  <BoxSingleInput>
                    <InputFields
                      flex="1"
                      name="bairro"
                      label="Bairro:"
                      padding=" 0 1rem"
                      nameError="bairro"
                      color="var(--primary-color)"
                    />
                    <InputFields
                      flex="2"
                      name="complemento"
                      label="Complemento:"
                      padding=" 0 1rem"
                      nameError="complemento"
                      color="var(--primary-color)"
                    />
                  </BoxSingleInput>
                  <BoxSingleInput>
                    <InputFields
                      name="cidade"
                      label="Cidade:"
                      padding=" 0 1rem"
                      nameError="cidade"
                      color="var(--primary-color)"
                    />
                    <InputFields
                      name="estado"
                      label="Estado:"
                      padding=" 0 1rem"
                      nameError="estado"
                      color="var(--primary-color)"
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
                      padding=" 0 1rem"
                      nameError="celular"
                      color="var(--primary-color)"
                      onChange={(ev) => handleMask(ev, setFieldValue)}
                    />
                    <InputFields
                      name="emailString"
                      label="E-mail:"
                      padding=" 0 1rem"
                      nameError="emailString"
                      color="var(--primary-color)"
                    />
                  </BoxSingleInput>
                </SubBoxForm>
                <SubBoxForm>
                  <SubText>Rede Sociais</SubText>
                  <BoxSingleInput>
                    <InputFields
                      name="facebook"
                      label="Facebook:"
                      padding=" 0 1rem"
                      nameError="facebook"
                      color="var(--primary-color)"
                    />
                    <InputFields
                      name="instagram"
                      label="Instagram:"
                      padding=" 0 1rem"
                      nameError="instagram"
                      color="var(--primary-color)"
                    />
                  </BoxSingleInput>
                </SubBoxForm>
                <SubBoxForm>
                  <SubText>Criar uma senha</SubText>
                  <BoxSingleInput>
                    <InputFields
                      name="senha"
                      label="Senha:"
                      padding=" 0 1rem"
                      nameError="senha"
                      type={showPass ? "password" : "text"}
                      color="var(--primary-color)"
                    />
                    <InputFields
                      name="confirmacaoSenha"
                      label="Confirma a Senha:"
                      padding=" 0 1rem"
                      nameError="confirmacaoSenha"
                      color="var(--primary-color)"
                      type={showPass ? "password" : "text"}
                      iconShow={
                        <BoxIconShow
                        right="1.5rem"
                          onChange={handleShowPass}
                          onMouseDown={handleShowPass}
                        >
                          {showPass ?  <VisibilityOffIcon />:<VisibilityIcon /> }
                        </BoxIconShow>
                      }
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
