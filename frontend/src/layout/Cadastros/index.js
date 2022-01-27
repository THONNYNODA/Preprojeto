import React, { useState } from "react";
import Card from "../../components/Card";

import TitlePage from "../../components/TitlePage";
import Dashbord from "../Dashbord";
import {
  BoxCadastros,
  ContainerCadastros,
  ContainerDetalhe,
  IconCadastro,
  ModalDetalhe,
} from "./styles";
import IconVagas from "../../assets/vagas.png";
import Formularios from "../../components/Formulario";
import InputFields from "../../components/Input";

function Cadastros() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  function CadastrarVagas(props) {
    const initialValues = {
      nome: "",
    };
    const handleClouse = () => {
      props.setOpen(false);
    };
    return (
      <ModalDetalhe>
        <ContainerDetalhe>
          <Card title="Cadastro de Vagas">
            <Formularios
              initialValues={initialValues}
              submit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <InputFields width='100%' label="Testeaa" name="nome" />
              <button type="submit">enviar</button>
            </Formularios>
          </Card>
        </ContainerDetalhe>
      </ModalDetalhe>
    );
  }

  return (
    <Dashbord>
      <TitlePage title="Cadastros" />
      <ContainerCadastros>
        <Card title="Vagas">
          <BoxCadastros onClick={handleOpen}>
            <IconCadastro img={IconVagas} />
            <h2>Vagas</h2>
          </BoxCadastros>
        </Card>
        <Card title="Vagas">vaga1</Card>
        <Card title="Vagas">vaga1</Card>
      </ContainerCadastros>
      {open ? <CadastrarVagas {...{ open, setOpen }} /> : null}
    </Dashbord>
  );
}

export default Cadastros;
