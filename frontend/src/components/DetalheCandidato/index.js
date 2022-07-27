import React from "react";
import Modal from "../Modal";
import PerfilMan from "../../assets/PerfilMan.svg";
import { ContainerCadastros, Divisorio } from "./styles";


function DetalheCandidato(props) {


  const handleClose = () => props.setOpen(false);


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
      <Modal  onClick={handleClose}>
      <ContainerCadastros>
        <main>
          <div className="containA">
            <img src={PerfilMan} alt="perfil man" />
            <ul>
              <li>Nascionalidade: {props.idAtual.nacionalidade}</li>
              <li>Idade: {calculoIdade(props.idAtual.data_nascimento)} anos </li>
              <li>Sexo: {props.idAtual.genero}</li>
            </ul>
          </div>
          <div className="containB">
            <h2 className="title">{props.idAtual.nome}</h2>
            <Divisorio />
            <div className="contain">
              <h2 className="subtitle">Perfil</h2>
              <div className="perfil">
                <span>Nascionalidade: {props.idAtual.nacionalidade}</span>
                <span>Idade: {calculoIdade(props.idAtual.data_nascimento)} anos</span>
              </div>
              <div className="perfil">
                <span>Sexo: {props.idAtual.genero}</span>
                <span>Email: {props.idAtual.email_string}</span>
              </div>
            </div>
            <div className="contain">
              <h2 className="subtitle">Escolaridade</h2>
              <p>
                loremExercitation laborum tempor aliqua adipisicing consectetur
                commodo dolore est culpa excepteur est. Nisi velit qui amet sint
                mollit amet. Aliquip in velit nostrud aliqua sunt. Et incididunt
                nisi aliquip consequat et tempor consectetur nisi amet
                excepteur. Duis magna proident nisi veniam fugiat dolore ad
                proident ex. Elit nisi id eu qui eiusmod elit. Esse occaecat
                dolor irure id ea est.
              </p>
             
            </div>
            <div className="contain">
              <h2 className="subtitle">Profissão</h2>
              <p>
                loremExercitation laborum tempor aliqua adipisicing consectetur
                commodo dolore est culpa excepteur est. Nisi velit qui amet sint
                mollit amet. Aliquip in velit nostrud aliqua sunt. Et incididunt
                nisi aliquip consequat et tempor consectetur nisi amet
                excepteur. Duis magna proident nisi veniam fugiat dolore ad
                proident ex. Elit nisi id eu qui eiusmod elit. Esse occaecat
                dolor irure id ea est.
              </p>
              
            </div>
          </div>
        </main>
      </ContainerCadastros>
      </Modal>
    
    </>
  );
}

export default DetalheCandidato;
