import React, { useState } from "react";
import Confirmacao from "../Confirmacao";
import Modal from "../Modal";
import Progresso from "../Progresso";
import {
  BoxDetalhe,
  ContainerDetalheVaga,
  TextDetalhe,
  Buttons,
} from "./styles";
import CheckIcon from "@mui/icons-material/Check";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

function DetalheCadastroVagas(props) {
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
        key={props.dados.id}
        title={props.dados.nome}
      >
        <ContainerDetalheVaga>
          <BoxDetalhe>
            <TextDetalhe>
              Carga horaria semanal: {props.dados.horasSemanais}
            </TextDetalhe>
          </BoxDetalhe>
          <BoxDetalhe>
            <TextDetalhe>
              Período de dias por semana: {props.dados.diasSemana}
            </TextDetalhe>
          </BoxDetalhe>
          <BoxDetalhe>
            <TextDetalhe>
              Turno no cargo: {props.dados.turnoTrabalho}
            </TextDetalhe>
          </BoxDetalhe>
          <BoxDetalhe>
            <TextDetalhe>Local do trabalho: {props.dados.endereco}</TextDetalhe>
          </BoxDetalhe>
          <BoxDetalhe>
            <TextDetalhe>
              Requisito para o cargo: {props.dados.requisitos}
            </TextDetalhe>
          </BoxDetalhe>
          <BoxDetalhe>
            <TextDetalhe>Regime: {props.dados.regime}</TextDetalhe>
          </BoxDetalhe>
          <BoxDetalhe>
            <TextDetalhe>Status do cargo: {props.dados.status}</TextDetalhe>
          </BoxDetalhe>
          <BoxDetalhe>
            <TextDetalhe>Salário: {props.dados.remuneracao}</TextDetalhe>
          </BoxDetalhe>
          <BoxDetalhe>
            <TextDetalhe>Descricao do cargo:</TextDetalhe>
            <TextDetalhe>{props.dados.descricao}</TextDetalhe>
          </BoxDetalhe>
        </ContainerDetalheVaga>
      </Modal>
      {progresso === true ? <Progresso /> : null}
      {status === true ? (
        <Confirmacao
          titleConfimar="Foi Realizado com Sucesso!!"
          background="#1f6357"
          icon={<CheckIcon />}
        />
      ) : null}
      {status === 2 ? (
        <Confirmacao
          titleConfimar="Atencao!! Ocorreu um erro, volte mais tarde"
          background="#1f6357"
          icon={<PriorityHighIcon />}
        />
      ) : null}
    </>
  );
}

export default DetalheCadastroVagas;
