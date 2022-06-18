import React from "react";
import Formularios from "../../Formulario";
import InputFields from "../../Input";
import { Buttons, BoxInput } from "./styles";
import Modal from "../../Modal";
import api from "../../../services/api";

function CadastrarVagas(props) {
  const initialValues = {
    name: "",
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

  const handleClose = () => {
    props.setCadastrar(false);
  };

  return (
    <>
      <Modal title="Vagas" onClick={handleClose}>
        <Formularios
          initialValues={initialValues}
          submit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              await api
                .put(`vaga/vaga/${props.dados.id}`, values)
                .then((res) => {
                  setSubmitting(false);
                  return alert("Alterado com sucesso!!");
                });
              document.location.reload();
            }, 400);
          }}
        >
          <BoxInput>
            <InputFields
              bgColor="#cccccc"
              width="100%"
              label="Nome"
              name="name"
              margin="0 0.5rem"
              color="var(--primary-color)"
            />
 <InputFields
              bgColor="#cccccc"
              width="100%"
              label="Status"
              name="status"
              component="select"
              margin="0 0.5rem"
              color="var(--primary-color)"
            >
              <option value="ativo">Ativo</option>
              <option value="desativado">Desativado</option>
            </InputFields>
           
          </BoxInput>
          <BoxInput>
            <InputFields
              bgColor="#cccccc"
              width="100%"
              label="Horas Semanais"
              name="horasSemanais"
              margin="0 0.5rem"
              color="var(--primary-color)"
            />
            <InputFields
              bgColor="#cccccc"
              width="100%"
              label="Dias Semanal"
              name="diasSemana"
              margin="0 0.5rem"
              color="var(--primary-color)"
            />

            <InputFields
              bgColor="#cccccc"
              width="100%"
              label="Turno Trabalho"
              name="turnoTrabalho"
              component="select"
              margin="0 0.5rem"
              color="var(--primary-color)"
            >
              <option value="">Escolha</option>
              <option value="Diurno">Diurno</option>
              <option value="Matiturno">Matiturno</option>
              <option value="Noturno">Noturno</option>
            </InputFields>
          </BoxInput>
          <BoxInput>
            <InputFields
              bgColor="#cccccc"
              width="100%"
              label="Remuneracao"
              name="remuneracao"
              margin="0 0.5rem"
              color="var(--primary-color)"
            />
            <InputFields
              bgColor="#cccccc"
              width="100%"
              label="Endereco"
              name="endereco"
              margin="0 0.5rem"
              color="var(--primary-color)"
            />
            <InputFields
              bgColor="#cccccc"
              width="100%"
              label="Regime"
              name="regime"
              margin="0 0.5rem"
              color="var(--primary-color)"
            />
          </BoxInput>
          <BoxInput>
          <InputFields
              bgColor="#cccccc"
              width="100%"
              
              label="Descricao"
              name="descricao"
              margin="0 0.5rem"
              color="var(--primary-color)"
            />
          </BoxInput>
          <Buttons type="submit">Cadastrar</Buttons>
        </Formularios>
      </Modal>
    </>
  );
}

export default CadastrarVagas;
