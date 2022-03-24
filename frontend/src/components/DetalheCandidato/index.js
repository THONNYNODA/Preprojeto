import React, { useEffect } from "react";
import api from "../../services/api";

import Modal from "../Modal";
import { BoxDetalhe, LinkDetalhe, TextDetalhe } from "./styles";
import { Buttons } from "../Cadastros/Candidato/styles";

function DetalheCandidato(props) {
  const handleClose = () => props.setOpen(false);
  const handleCandidatar = () => {
    alert("Inscrito!!");
    props.setOpen(false);
  };

  // useEffect(() => {
  //   api.get("vaga/vagas").then((res) => {
  //     console.log(res.data);
  //   });
  // }, []);

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
        key={props.lista[props.idAtual].id}
        title={props.lista[props.idAtual].name}
      >
        <BoxDetalhe>
          <TextDetalhe>Nome Completo:</TextDetalhe>
          <TextDetalhe>{props.lista[props.idAtual].name}</TextDetalhe>
        </BoxDetalhe>
        <BoxDetalhe>
          <TextDetalhe>Idade:</TextDetalhe>
          <TextDetalhe>22 anos</TextDetalhe>
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
            <LinkDetalhe href="tel:(44) 9 9999-9999">
              (44) 9 9999-9999
            </LinkDetalhe>
          </TextDetalhe>
        </BoxDetalhe>
        <BoxDetalhe>
          <TextDetalhe>E-mail: </TextDetalhe>
          <TextDetalhe>
            <LinkDetalhe href={`mailto:${props.lista[props.idAtual].email}`}>
              {props.lista[props.idAtual].email}
            </LinkDetalhe>
          </TextDetalhe>
        </BoxDetalhe>
        <Buttons onClick={handleCandidatar}>Candidatar - se</Buttons>
      </Modal>
    </>
  );
}

export default DetalheCandidato;
