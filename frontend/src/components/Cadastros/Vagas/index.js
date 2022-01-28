import React from "react";
import Formularios from "../../Formulario";
import Card from "../../Card";
import InputFields from "../../Input";
import { ModalDetalhe, ContainerDetalhe, Buttons, BoxInput } from "./styles";

function CadastrarVagas(props) {
  const initialValues = {
    name: props.lista[props.idAtual].name,
    descricao: "",
    horasSemanais: "",
    diasSemana: "",
    turnoTrabalho: "",
    remuneracao: "",
    endereco: "",
    requisitos: "",
    regime: "",
    status: "",
  };
  const handleClouse = () => {
    props.setOpen(false);
  };

  return (
    <>
      <ModalDetalhe onClick={handleClouse} />
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
            <p>{props.lista[props.idAtual].name}</p>
            <BoxInput>
              <InputFields
                bgColor="#cccccc"
                width="100%"
                label="Nome"
                name="name"
              />
              <InputFields
                bgColor="#cccccc"
                width="100%"
                label="Descricao"
                name="descricao"
              />
            </BoxInput>
            <BoxInput>
              <InputFields
                bgColor="#cccccc"
                width="100%"
                label="Horas Semanais"
                name="horasSemanais"
              />
              <InputFields
                bgColor="#cccccc"
                width="100%"
                label="Dias Semanal"
                name="diasSemana"
              />
              <InputFields
                bgColor="#cccccc"
                width="100%"
                label="Turno Trabalho"
                name="turnoTrabalho"
              />
            </BoxInput>
            <BoxInput>
              <InputFields
                bgColor="#cccccc"
                width="100%"
                label="Remuneracao"
                name="remuneracao"
              />
              <InputFields
                bgColor="#cccccc"
                width="100%"
                label="Endereco"
                name="endereco"
              />
              <InputFields
                bgColor="#cccccc"
                width="100%"
                label="Regime"
                name="regime"
              />
            </BoxInput>
            <InputFields
              bgColor="#cccccc"
              //width="100%"
              label="Ativo"
              name="status"
              type="radio"
              value="ativo"
            />
            <InputFields
              bgColor="#cccccc"
              //width="100%"
              label="Desativado"
              name="status"
              type="radio"
              value="desativado"
            />

            <Buttons type="submit">Cadastrar</Buttons>
          </Formularios>
        </Card>
      </ContainerDetalhe>
    </>
  );
}

export default CadastrarVagas;
