import React, { useState } from "react";
import Confirmacao from "../Confirmacao";
import Modal from "../Modal";
import Progresso from "../Progresso";
import {
  BoxDetalhe,
  ContainerDetalheVaga,
  TextDetalhe,
  Buttons,
  TitleDetalhe
} from "./styles";
import CheckIcon from "@mui/icons-material/Check";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

function DetalheVagas(props) {
  const [progresso, setProgresso] = useState(false);
  const [status, setStatus] = useState();

  const handleClose = () => props.setOpen(false);

  const handleCandidatar = () => {
    setProgresso(true);
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

  const calculoIdade = (dataNascimento) => {
    var hoje = new Date();
    var nascimento = new Date(dataNascimento);
    var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();

    if (
      new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) <
      new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())
    )
      diferencaAnos--;

    return diferencaAnos;
  };
  return (
    <>
      <Modal
        onClick={handleClose}
        key={props.idAtual.id}
        title={props.idAtual.nome}
      >
        <ContainerDetalheVaga>
        
          <BoxDetalhe>
          <TextDetalhe>Vaga: </TextDetalhe>
            <TextDetalhe color={props.idAtual.status ? 'var(--primary-color)' : 'red'}>{props.idAtual.status ? 'Disponivel' : 'Não Disponivel' }</TextDetalhe>
          </BoxDetalhe>
          <BoxDetalhe>
            <TextDetalhe>Período:</TextDetalhe>
            <TextDetalhe>{props.idAtual.turno}</TextDetalhe>
          </BoxDetalhe>
          <BoxDetalhe>
            <TextDetalhe>Horas Semanais:</TextDetalhe>
            <TextDetalhe>{props.idAtual.horasSemanais}</TextDetalhe>
          </BoxDetalhe>
          <BoxDetalhe>
            <TextDetalhe>Dias da Semana:</TextDetalhe>
            <TextDetalhe>{props.idAtual.diasSemanais}</TextDetalhe>
          </BoxDetalhe>
          <BoxDetalhe>
            <TextDetalhe>Salário:</TextDetalhe>
            <TextDetalhe>
              {`${new Intl.NumberFormat("br-BR", {
                style: "currency",
                currency: "BRL",
              }).format(props.idAtual.remuneracao)}`}
            </TextDetalhe>
          </BoxDetalhe>
          <BoxDetalhe>
            <TextDetalhe>Detalhe: </TextDetalhe>
            <TextDetalhe>{props.idAtual.descricao}</TextDetalhe>
          </BoxDetalhe>
          <Buttons onClick={handleCandidatar}>Candidatar - se</Buttons>
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
