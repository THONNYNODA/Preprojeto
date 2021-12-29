import React from "react";
import * as yup from "yup";
import Formularios from "../../components/Formulario";
import InputFields from "../../components/Input";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
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
} from "./styles";

const validationSchema = yup.object().shape({
  cpf: yup.string().required("Campo e obrigatorio"),
  senha: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .required("Campo e obrigatorio"),
});

function Login() {
  const inicial = {
    cpf: "",
    senha: "",
  };
  return (
    <>
      <ContainerLogin>
        <ContainerImg width="60%">
          <ContainerFilter />
          <BoxText>
            <Title color="#e32727">Bem-Vindo ao Vagas Cemil</Title>
            <Text color="#ffffff">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              at urna augue. Fusce et sapien in nibh interdum facilisis.
            </Text>
          </BoxText>
        </ContainerImg>
        <ContainerForm width="40%">
          <BoxForm>
            <Title color="#e32727">Login</Title>
            <Text color="#32a852">
              Faça o seu login para verificar as vagas disponivel
            </Text>
            <Formularios
              validationSchema={validationSchema}
              initialValues={inicial}
              submit={(values, { setSubmitting }) => {
                setTimeout(async() => {
                  await alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <InputFields
                label="CPF"
                icon={<PersonRoundedIcon fontSize="large" />}
                name="cpf"
                placeholder="Insira o seu login"
                fontSize="1.2rem"
                fontSizeLabel="1.2rem"
                height="3.5rem"
                width="100%"
              />
              <InputFields
                label="Senha"
                type="password"
                height="3.5rem"
                fontSize="1.2rem"
                fontSizeLabel="1.2rem"
                width="100%"
                icon={<VpnKeyIcon fontSize="large" />}
                name="senha"
                placeholder="Insira a sua senha"
              />
              <Buttons type="submit">Entrar</Buttons>
            </Formularios>
          </BoxForm>
        </ContainerForm>
      </ContainerLogin>
    </>
  );
}

export default Login;
