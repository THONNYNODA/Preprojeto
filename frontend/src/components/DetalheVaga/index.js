import React from "react";

import Modal from "../Modal";
import { BoxDetalhe, TextDetalhe } from "./styles";
import { Buttons } from "../Cadastros/Candidato/styles";

function DetalheVagas(props) {
  const handleClose = () => props.setOpen(false);
  const handleCandidatar = () => {
    alert("Inscrito!!");
    props.setOpen(false);
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
        <BoxDetalhe>
          <TextDetalhe>Período:</TextDetalhe>
          <TextDetalhe>Noturno</TextDetalhe>
        </BoxDetalhe>
        <BoxDetalhe>
          <TextDetalhe>Salário:</TextDetalhe>
          <TextDetalhe>
            R$ 1.200,00 + Vale Alimentação + Insalubridade
          </TextDetalhe>
        </BoxDetalhe>
        <BoxDetalhe>
          <TextDetalhe>Detalhe: </TextDetalhe>
          <TextDetalhe>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            maximus ipsum nec porta viverra. Nulla non ex nec ligula blandit
            faucibus. Aliquam congue id velit a facilisis.
          </TextDetalhe>
        </BoxDetalhe>
        <Buttons onClick={handleCandidatar}>Candidatar - se</Buttons>
      </Modal>
    </>
  );
}

export default DetalheVagas;
