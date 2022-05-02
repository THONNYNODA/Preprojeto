import React, { useState } from "react";
import Confirmacao from "../Confirmacao";
import Modal from "../Modal";
import Progresso from "../Progresso";
import {
  BoxDetalhe,
  ContainerDetalheVaga,
  TextDetalhe,
  Buttons,
  BoxPerfil,
} from "./styles";
import CheckIcon from "@mui/icons-material/Check";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import Perfil from '../../assets/PerfilMan.svg'

function DetalheCadastroVagas(props) {
  const [progresso, setProgresso] = useState(false);
  const [status, setStatus] = useState();

  const handleClouse = () => {
    props.setOpenDetalhe(false);
  };

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
        onClick={handleClouse}
        key={props.dados.id}
        title={props.dados.nome}
        background="#fff"
      >
        <ContainerDetalheVaga>
          <BoxDetalhe>
              <BoxPerfil img={Perfil}/>
          </BoxDetalhe>
          <BoxDetalhe>
            <TextDetalhe>
              Carga horaria semanal: {props.dados.horasSemanais}
            </TextDetalhe>
            <TextDetalhe>
              Período de dias por semana: {props.dados.diasSemana}
            </TextDetalhe>
            <TextDetalhe>
              Turno no cargo: {props.dados.turnoTrabalho}
            </TextDetalhe>
            <TextDetalhe>Local do trabalho: {props.dados.endereco}</TextDetalhe>
            <TextDetalhe>
              Requisito para o cargo: {props.dados.requisitos}
            </TextDetalhe>
            <TextDetalhe>Regime: {props.dados.regime}</TextDetalhe>
            <TextDetalhe>Status do cargo: {props.dados.status}</TextDetalhe>
            <TextDetalhe>Salário: {props.dados.remuneracao}</TextDetalhe>
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
