import React, { useState } from "react";
import Formularios from "../../Formulario";
import InputFields from "../../Input";
import { Buttons, BoxInput } from "./styles";
import Modal from "../../Modal";
import api from "../../../services/api";
import Progresso from "../../Progresso";
import Confirmacao from "../../Confirmacao";
import CheckIcon from "@mui/icons-material/Check";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

function CadastrarVagas(props) {
  const [progresso, setProgresso] = useState(false);
  const [confirmacao, setConfirmacao] = useState(false);

  const initialValues = {
    nome: "",
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
              setProgresso(true);
              await api.post(`vaga/vaga`, values).then((res) => {
                setSubmitting(false);
                return setConfirmacao(true);
              });
              setProgresso(false);
              document.location.reload();
            }, 800);
          }}
        >
          <BoxInput>
            <InputFields
              bgColor="#cccccc"
              width="100%"
              label="Nome"
              name="nome"
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
              <option default>Escolha</option>
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
              <option value="diurno">Diurno</option>
              <option value="matiturno">Matiturno</option>
              <option value="noturno">Noturno</option>
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
      {progresso === true ? <Progresso /> : null}
      {confirmacao === true ? (
        <Confirmacao
          titleConfimar="Foi Realizado com Sucesso!!"
          colortitle="var(--primary-color)"
          colorIcon="var(--primary-color)"
          icon={<CheckIcon />}
        />
      ) : null}
      {confirmacao === 2 ? (
        <Confirmacao
          titleConfimar="Atencao!! Ocorreu um erro"
          colortitle="var(--error-color)"
          colorIcon="var(--error-color)"
          icon={<PriorityHighIcon />}
        />
      ) : null}
    </>
  );
}

export default CadastrarVagas;
