import React, { useState } from "react";
import Confirmacao from "../Confirmacao";
import Modal from "../Modal";
import Progresso from "../Progresso";
import { ContainerDetalheVaga } from "./styles";
import CheckIcon from "@mui/icons-material/Check";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";


function DetalheCadastroVagas(props) {
  const [progresso, setProgresso] = useState(false);
  const [status, setStatus] = useState();

  const handleClose = () => props.setOpenDetalhe(false);


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
        key={props.dados.id}
        title={props.dados.nome}
      >
        <ContainerDetalheVaga>
          <div>
            <p>
              Vagas:{" "}
              <strong className={props.dados.status ? "active" : "desable"}>
                {props.dados.status ? "Disponivel" : "Não Disponivel"}
              </strong>
            </p>
            <p>Horas Semanais: {props.dados.horasSemanais} horas</p>
            <p>Dias da Semana: {props.dados.diasSemanais}</p>
            <p>
              Salário:{" "}
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(props.dados.remuneracao)}
            </p>
            <p>Detalhe: {props.dados.descricao}</p>
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

export default DetalheCadastroVagas;
