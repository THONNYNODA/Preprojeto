import React, { useState } from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import InputFields from "../../components/Input";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
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
} from "./styles";
import {
  BoxIconShow,
  ContainerField,
  TextErrors,
} from "../../components/Input/styles";

const validationSchema = yup.object().shape({
  cpf: yup.string().required("Campo e obrigatorio"),
  senha: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .required("Campo e obrigatorio"),
});

function Login() {
  const [showPass, setShowPass] = useState(true);

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
        <ContainerImg width="70%">
          <ContainerFilter />
          <BoxText>
            <Title color="#FD5956">Bem-Vindo ao Vagas Cemil</Title>
            <Text color="#ffffff">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              at urna augue. Fusce et sapien in nibh interdum facilisis.
            </Text>
          </BoxText>
        </ContainerImg>
        <ContainerForm width="30%">
          <BoxForm>
            <TitleLogin>Login</TitleLogin>
            <Text color="#fff">
              Faça o seu login para verificar as vagas disponivel
            </Text>
            <Formik
              validationSchema={validationSchema}
              initialValues={inicial}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ errors, touched, isSubmitting, values }) => (
                <Form>
                  <ContainerField padding="30px">
                    <InputFields
                      label="CPF"
                      icon={<PersonRoundedIcon fontSize="large" />}
                      name="cpf"
                      placeholder="CPF"
                      fontSize="1.2rem"
                      //height="3.5rem"
                      width="100%"
                      margin="0"
                    />
                    {errors.cpf && touched.cpf ? (
                      <TextErrors>{errors.cpf}</TextErrors>
                    ) : null}
                    <InputFields
                      label="Senha"
                      type={showPass ? "password" : "text"}
                      //height="2.5rem"
                      fontSize="1.2rem"
                      width="100%"
                      icon={<VpnKeyIcon fontSize="large" />}
                      name="senha"
                      placeholder="******"
                      margin="0"
                      onChange={handleShowPass}
                      iconShow={
                        <BoxIconShow
                          onChange={handleShowPass}
                          onMouseDown={handleShowPass}
                        >
                          {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </BoxIconShow>
                      }
                    />
                    {errors.senha && touched.senha ? (
                      <TextErrors>{errors.senha}</TextErrors>
                    ) : null}
                    <Buttons type="submit">Entrar</Buttons>
                  </ContainerField>
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
