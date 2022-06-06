import React, { useState } from "react";
import Confirmacao from "../Confirmacao";
import Modal from "../Modal";
import Progresso from "../Progresso";
import { ContainerDetalheVaga } from "./styles";
import CheckIcon from "@mui/icons-material/Check";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { toast } from "react-toastify";

function DetalheVagas(props) {
  const [progresso, setProgresso] = useState(false);
  const [status, setStatus] = useState();

  const handleClose = () => props.setOpen(false);

  const handleCandidatar = () => {
    try {
      setTimeout(() => {
        setProgresso(false);
        return setStatus(true);
      }, 2000);
      setTimeout(() => {
        return props.setOpen(false);
      }, 4000);
    } catch (error) {
      setTimeout(() => {
        setProgresso(false);
        return setStatus(false);
      }, 2000);
      setTimeout(() => {
        return props.setOpen(false);
      }, 4000);
    }
  };

  return (
    <>
      <Modal
        onClick={handleClose}
        key={props.idAtual.id}
        title={props.idAtual.nome}
      >
        <ContainerDetalheVaga>
          <div>
            <p>
              Vagas:{" "}
              <strong className={props.idAtual.status ? "active" : "desable"}>
                {props.idAtual.status ? "Disponivel" : "Não Disponivel"}
              </strong>
            </p>
            <p>Horas Semanais: {props.idAtual.horasSemanais} horas</p>
            <p>Dias da Semana: {props.idAtual.diasSemanais}</p>
            <p>
              Salário:{" "}
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(props.idAtual.remuneracao)}
            </p>
            <p>Detalhe: {props.idAtual.descricao}</p>
          </div>
          <button onClick={handleCandidatar}>Cadastrar - se </button>
        </ContainerDetalheVaga>
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

export default DetalheVagas;
