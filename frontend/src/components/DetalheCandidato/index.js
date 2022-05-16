import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Confirmacao from "../Confirmacao";

import Modal from "../Modal";
import Progresso from "../Progresso";
import { BoxDetalhe, LinkDetalhe, TextDetalhe, Buttons } from "./styles";
import CheckIcon from "@mui/icons-material/Check";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

function DetalheCandidato(props) {
  const [procgresso, setProgresso] = useState(false);
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
      new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) >
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
        title={props.idAtual.name}
      >
        <BoxDetalhe>
          <TextDetalhe>Nome Completo:</TextDetalhe>
          <TextDetalhe>{props.idAtual.nome}</TextDetalhe>
        </BoxDetalhe>
        <BoxDetalhe>
          <TextDetalhe>Idade:</TextDetalhe>
          <TextDetalhe>
            {calculoIdade(props.idAtual.dataNascimento)}
          </TextDetalhe>
        </BoxDetalhe>
        <BoxDetalhe>
          <TextDetalhe>Formação:</TextDetalhe>
          <TextDetalhe>Técnico de Enfermagem</TextDetalhe>
        </BoxDetalhe>
        <BoxDetalhe>
          <TextDetalhe>Cargo Requerido: </TextDetalhe>
          <TextDetalhe>Técnico de Enfermagem</TextDetalhe>
        </BoxDetalhe>
        <BoxDetalhe>
          <TextDetalhe>Periodo: </TextDetalhe>
          <TextDetalhe>Noturno</TextDetalhe>
        </BoxDetalhe>
        <BoxDetalhe>
          <TextDetalhe>Telefone: </TextDetalhe>
          <TextDetalhe>
            <LinkDetalhe href={props.idAtual.celular}>
              {props.idAtual.celular}
            </LinkDetalhe>
          </TextDetalhe>
        </BoxDetalhe>
        <BoxDetalhe>
          <TextDetalhe>E-mail: </TextDetalhe>
          <TextDetalhe>
            <LinkDetalhe href={`mailto:${props.idAtual.emailString}`}>
              {props.idAtual.emailString}
            </LinkDetalhe>
          </TextDetalhe>
        </BoxDetalhe>
        <Buttons onClick={handleCandidatar}>Candidatar - se</Buttons>
      </Modal>
      {procgresso === true ? <Progresso /> : null}
      {status === true ? (
        <Confirmacao
          titleConfimar="Foi Realizado com Sucesso!!"
          background="var(--primary-color)"
          icon={<CheckIcon />}
        />
      ) : null}
      {status === 2 ? (
        <Confirmacao
          titleConfimar="Foi Realizado com Sucesso!!"
          background="var(--primary-color)"
          icon={<CheckIcon />}
        />
      ) : null}
    </>
  );
}

export default DetalheCandidato;
