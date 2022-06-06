import React, { useState } from "react";
import Formularios from "../../Formulario";
import InputFields from "../../Input";
import { Buttons, BoxInput } from "./styles";
import Modal from "../../Modal";
import api from "../../../services/api";
import CheckIcon from "@mui/icons-material/Check";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import Confirmacao from "../../Confirmacao";
import Progresso from "../../Progresso";

function EditarVagas(props) {
  const [status, setStatus] = useState();
  const [progresso, setProgresso] = useState(false);
  const initialValues = {
    nome: props.dados.nome,
    descricao: props.dados.descricao,
    horasSemanais: props.dados.horasSemanais,
    diasSemana: props.dados.diasSemana,
    turnoTrabalho: props.dados.turnoTrabalho,
    remuneracao: props.dados.remuneracao,
    endereco: props.dados.endereco,
    requisitos: props.dados.requisitos,
    regime: props.dados.regime,
    status: props.dados.status,
  };
  const handleClouse = () => {
    
    props.setOpen(false);
  };

  return (
    <>
      <Modal title="Vagas" onClick={handleClouse}>
        <Formularios
          initialValues={initialValues}
          submit={(values, { setSubmitting }) => {
            setProgresso(false);
            try {
              // setTimeout(async () => {
              //   // await api
              //   //   .put(`vaga/vaga/${props.dados.id}`, values)
              //   //   .then((res) => {
              //   //     setSubmitting(false);
              //   //     return setStatus(true);
              //   //   });
              //   document.location.reload();
              // }, 400);
              return setStatus(true);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <BoxInput>
            <InputFields
              color=" rgba(31, 99, 87)"
              width="100%"
              label="Nome"
              name="nome"
              margin="0 0.5rem"
            />

            <InputFields
              width="100%"
              label="Descricao"
              name="descricao"
              margin="0 0.5rem"
              color=" rgba(31, 99, 87)"
            />
          </BoxInput>
          <BoxInput>
            <InputFields
              width="100%"
              label="Horas Semanais"
              name="horasSemanais"
              margin="0 0.5rem"
              color=" rgba(31, 99, 87)"
            />
            <InputFields
              width="100%"
              label="Dias Semanal"
              name="diasSemana"
              margin="0 0.5rem"
              color=" rgba(31, 99, 87)"
            />

            <InputFields
              width="100%"
              label="Turno Trabalho"
              name="turnoTrabalho"
              component="select"
              margin="0 0.5rem"
              color=" rgba(31, 99, 87)"
            >
              <option value="">Escolha</option>
              <option value="Diurno">Diurno</option>
              <option value="Matiturno">Matiturno</option>
              <option value="Noturno">Noturno</option>
            </InputFields>
          </BoxInput>
          <BoxInput>
            <InputFields
              width="100%"
              label="Remuneracao"
              name="remuneracao"
              margin="0 0.5rem"
              color=" rgba(31, 99, 87)"
            />
            <InputFields
              width="100%"
              label="Endereco"
              name="endereco"
              margin="0 0.5rem"
              color=" rgba(31, 99, 87)"
            />
            <InputFields
              width="100%"
              label="Regime"
              name="regime"
              margin="0 0.5rem"
              color=" rgba(31, 99, 87)"
            />
          </BoxInput>
          <BoxInput>
            <InputFields
              width="100%"
              label="Status"
              name="status"
              component="select"
              margin="0 0.5rem"
              color=" rgba(31, 99, 87)"
            >
              <option value="ativo">Ativo</option>
              <option value="desativado">Desativado</option>
            </InputFields>
          </BoxInput>
          <Buttons type="submit">Cadastrar</Buttons>
        </Formularios>
      </Modal>
      {progresso === true ? <Progresso /> : null}
      {status === true ? (
        <Confirmacao
          titleConfimar="Foi Realizado com Sucesso!!"
          background="var(--primary-color)"
          icon={<CheckIcon />}
        />
      ) : null}
      {status === 2 ? (
        <Confirmacao
          titleConfimar="Atencao!! Ocorreu um erro, volte mais tarde"
          background="var(--primary-color)"
          icon={<PriorityHighIcon />}
        />
      ) : null}
    </>
  );
}

export default EditarVagas;
