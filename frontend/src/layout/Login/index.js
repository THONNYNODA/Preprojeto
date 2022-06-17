import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import * as yup from "yup";
import InputFields from "../../components/Input";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import {
  BoxText,
  ContainerFilter,
  ContainerLogin,
  ContainerImg,
  Text,
  Title,
  ContainerForm,
  Buttons,
  BoxForm,
  TitleLogin,
  Divisorio,
} from "./styles";
import { BoxIconShow } from "../../components/Input/styles";

import { Form, Formik, Field } from "formik";

const validationSchema = yup.object().shape({
  cpf: yup.string().required("Campo e obrigatorio"),
  senha: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .required("Campo e obrigatorio"),
});

function Login(props) {
  const [showPass, setShowPass] = useState(true);

  const handleMask = (ev, setFieldValue) => {
    const { name, value } = ev.target || "";
    setFieldValue(name, value);
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const inicial = {
    cpf: "",
    senha: "",
  };
  return (
    <>
      <ContainerLogin>
        <ContainerImg width="60%">
          <BoxText>
            <ContainerFilter />
            <Title color="#FD5956">Vagas ao Cemil</Title>
            <Text color="#ffffff">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              at urna augue. Fusce et sapien in nibh interdum facilisis.
            </Text>
          </BoxText>
        </ContainerImg>
        <ContainerForm width="40%">
          <BoxForm>
            <TitleLogin>Login</TitleLogin>
            <Text color="#000000">
              Faça o seu login para verificar as vagas disponivel
            </Text>
            <Divisorio height="0.1rem" margin="1.5rem 0" />
            <Formik
              validationSchema={validationSchema}
              initialValues={inicial}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert("Com sucesso");
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
                  <InputMask
                    mask="999.999.999-99"
                    maskChar=" "
                    onChange={(e) => {
                      const value = e.target.value || "";
                      setFieldValue("cpf", value);
                    }}
                  >
                    {(inputProps) => (
                      <InputFields
                        {...inputProps}
                        padding=" 0.5rem 1rem"
                        name="cpf"
                        label="CPF:"
                        nameError="cpf"
                        color="var(--primary-color)"
                        icon={<PersonRoundedIcon />}
                      />
                    )}
                  </InputMask>
                  <InputFields
                    label="Senha"
                    color="var(--primary-color)"
                    colorResponse="#ffffff"
                    type={showPass ? "password" : "text"}
                    padding="1rem"
                    fontSize="1.2rem"
                    width="100%"
                    icon={<VpnKeyIcon />}
                    name="senha"
                    placeholder="******"
                    margin="0"
                    nameError="senha"
                    iconShow={
                      <BoxIconShow onClick={handleShowPass}>
                        {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </BoxIconShow>
                    }
                  />

                  <Buttons type="submit">Entrar</Buttons>

                </Form>
              )}
            </Formik>
          </BoxForm>
        </ContainerForm>
      </ContainerLogin>
    </>
  );
}

export default Login;
