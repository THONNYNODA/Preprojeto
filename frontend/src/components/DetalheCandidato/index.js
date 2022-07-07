import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Confirmacao from "../Confirmacao";

import Modal from "../Modal";
import Progresso from "../Progresso";
import { ContainerDetalheCandidato } from "./styles";
import CheckIcon from "@mui/icons-material/Check";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

function DetalheCandidato(props) {
  const [progresso, setProgresso] = useState(false);
  const [status, setStatus] = useState(false);

  const handleClose = () => props.setOpen(false);
  // const handleCandidatar = () => {
  //   setProgresso(true);
  //   try {
  //     setTimeout(() => {
  //       setProgresso(false);
  //       return setStatus(true);
  //     }, 2000);
  //   } catch (error) {
  //     setTimeout(() => {
  //       setProgresso(false);
  //       return setStatus(false);
  //     }, 2000);
  //   }
  // };

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
      <Modal onClick={handleClose} title={props.idAtual.nome}>
        <ContainerDetalheCandidato key={props.idAtual.id}>
          <div>
            <p>Estado Civil: {props.idAtual.estado_civil}</p>
            <p>Nascionalidade: {props.idAtual.nacionalidade}</p>
            <p>Contato: {props.idAtual.celular}</p>
            <p>Idade: {calculoIdade(props.idAtual.data_nascimento)}</p>
            <p>Detalhe: {props.idAtual.descricao}</p>
          </div>
          {/* <button onClick={handleCandidatar}>Cadastrar - se </button> */}
        </ContainerDetalheCandidato>
      </Modal>
      {/* {progresso === true ? <Progresso /> : null}
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
      ) : null} */}
    </>
  );
}

export default DetalheCandidato;
