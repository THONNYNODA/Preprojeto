import React, { useEffect, useState } from "react";
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

import api from '../../services/api'

const validationSchema = yup.object().shape({
  cpf: yup.string().required("Campo e obrigatorio"),
  senha: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .required("Campo e obrigatorio"),
});

function Login(props) {
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
            <Formularios
              validationSchema={validationSchema}
              initialValues={inicial}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <ContainerField padding="30px">
                <InputFields
                  label="CPF"
                  icon={<PersonRoundedIcon fontSize="large" />}
                  name="cpf"
                  placeholder="CPF"
                  fontSize="1.2rem"
                  //height="3.5rem"
                  width="100%"
                  height="2rem"
                  margin="0"
                  nameError="cpf"
                />

                <InputFields
                  label="Senha"
                  type={showPass ? "password" : "text"}
                  //height="2.5rem"
                  fontSize="1.2rem"
                  width="100%"
                  height="2rem"
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
              </ContainerField>
              <Buttons type="submit">Entrar</Buttons>
            </Formularios>
          </BoxForm>
        </ContainerForm>
      </ContainerLogin>
    </>
  );
}

export default Login;
