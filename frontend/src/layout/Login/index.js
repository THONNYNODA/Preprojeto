import React, { useState } from "react";
import InputMask from "react-input-mask";
import * as yup from "yup";
import Formularios from "../../components/Formulario";
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
  BoxFilter,
  Divisorio,
} from "./styles";
import { BoxIconShow, ContainerField } from "../../components/Input/styles";

import api from "../../services/api";
import { Form, Formik } from "formik";

const validationSchema = yup.object().shape({
  cpf: yup.string().required("Campo e obrigatorio"),
  senha: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .required("Campo e obrigatorio"),
});

function Login(props) {
  const [showPass, setShowPass] = useState(true);

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
            <Text color="#000000" margin="0px 0 15px 0 ">
              Faça o seu login para verificar as vagas disponivel
            </Text>
            <Divisorio height="1px" />
            <Formik
              validationSchema={validationSchema}
              initialValues={inicial}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout( () => {
                   alert("Com sucesso")
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
                  <MaskInput
                    padding="10px"
                    mask="999.999.999-99"
                    colorResponse="#ffffff"
                    color="#1f6357"
                    label="CPF"
                    icon={<PersonRoundedIcon fontSize="large" />}
                    name="cpf"
                    placeholder="CPF"
                    fontSize="1.2rem"
                    width="100%"
                    margin="0"
                    nameError="cpf"
                    onChange={(ev) => handleMask(ev, setFieldValue)}
                  />

                  <InputFields
                  
                    label="Senha"
                    color="#1f6357"
                    colorResponse="#ffffff"
                    type={showPass ? "password" : "text"}
                    padding="10px"
                    fontSize="1.2rem"
                    width="100%"
                    icon={<VpnKeyIcon fontSize="large" />}
                    name="senha"
                    placeholder="******"
                    margin="0"
                    nameError="senha"
                    iconShow={
                      <BoxIconShow
                        onChange={handleShowPass}
                        onMouseDown={handleShowPass}
                      >
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
