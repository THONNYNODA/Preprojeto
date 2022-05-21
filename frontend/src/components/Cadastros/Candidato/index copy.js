import React, { useState } from "react";
import { listasPaises } from "../../../services/listaPaises";
import * as yup from "yup";
import { Form, Formik } from "formik";
import InputFields from "../../Input";
import {
  BoxForm,
  BoxSingleInput,
  BoxText,
  Buttons,
  ContainerCadastro,
  ContainerFilter,
  ContainerForm,
  Divisorio,
  Title,
} from "./styles";
import { ContainerField, TextErrors } from "../../Input/styles";
import api from "../../../services/api";

const validationSchema = yup.object().shape({
  nome: yup.string().required("Campo e obrigatorio"),
  dataNascimento: yup.date().required("Campo e obrigatorio"),
  estadoCivil: yup.string().required("Campo e obrigatorio"),
  nacionalidade: yup.string().required("Campo e obrigatorio"),
  genero: yup.string().required("Campo e obrigatorio"),
  //nomeSocial: yup.string().required("Campo e obrigatorio"),
  logradouro: yup.string().required("Campo e obrigatorio"),
  cep: yup.string().required("Campo e obrigatorio"),
  bairro: yup.string().required("Campo e obrigatorio"),
  estado: yup.string().required("Campo e obrigatorio"),
  cidade: yup.string().required("Campo e obrigatorio"),
  emailString: yup.string().required("Campo e obrigatorio"),
  celular: yup.string().required("Campo e obrigatorio"),
  cpf: yup.string().required("Campo e obrigatorio"),
  rg: yup.string().required("Campo e obrigatorio"),
  instagram: yup.string().required("Campo e obrigatorio"),
  facebook: yup.string().required("Campo e obrigatorio"),
  senha: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .required("Campo e obrigatorio"),
  confirmacaoSenha: yup
    .string()
    .oneOf([yup.ref("senha")], "A senha nao confirma")
    .required("Campo e obrigatorio"),
});

function Candidato(props) {
  const [view, setView] = useState();

  const Genero = ["Masculino", "Feminino", "Outros"];
  const civil = ["Solteiro(a)", "Casado(a)", "Viúvo(a)"];

  const listaGenero = Genero.map((e) => <option value={e}>{e}</option>);
  const listaCivil = civil.map((e) => <option value={e}>{e}</option>);
  const Nacionalidade = listasPaises.map((e) => (
    <option value={e.gentilico}>{e.gentilico}</option>
  ));

  const handleShowSenha = () => {
    setView(!view);
  };

  const inicial = {
    nome: "",
    dataNascimento: "",
    estadoCivil: "",
    nacionalidade: "",
    genero: "",
    nomeSocial: "",
    logradouro: "",
    cep: "",
    bairro: "",
    complemento: "",
    estado: "",
    cidade: "",
    emailString: "",
    celular: "",
    cpf: "",
    rg: "",
    instagram: "",
    facebook: "",
    senha: "",
    confirmacaoSenha: "",
  };

  return (
    <>
      <ContainerCadastro>
        <Formik
          validationSchema={validationSchema}
          initialValues={inicial}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              <ContainerForm>
                <BoxSingleInput>
                  <BoxForm>
                    <ContainerField>
                      <InputFields
                        label="Nome"
                        name="nome"
                        placeholder="Insira o seu Nome"
                        width="100%"
                      />
                      {errors.nome && touched.nome ? (
                        <TextErrors>{errors.nome}</TextErrors>
                      ) : null}
                    </ContainerField>
                  </BoxForm>
                  <BoxForm>
                    <ContainerField>
                      <InputFields
                        label="Nome Social"
                        name="nomeSocial"
                        placeholder="Insira o seu Nome Social"
                        width="100%"
                      />
                      {errors.nomeSocial && touched.nomeSocial ? (
                        <TextErrors>{errors.nomeSocial}</TextErrors>
                      ) : null}
                    </ContainerField>
                  </BoxForm>
                  <BoxForm>
                    <ContainerField>
                      <InputFields
                        label="CPF"
                        name="cpf"
                        placeholder="Ex: 999.999.999 - 99"
                        width="100%"
                      />
                      {errors.cpf && touched.cpf ? (
                        <TextErrors>{errors.cpf}</TextErrors>
                      ) : null}
                    </ContainerField>
                    <ContainerField>
                      <InputFields
                        label="RG"
                        name="rg"
                        placeholder="Ex: 9 999.999 "
                        width="100%"
                      />
                      {errors.rg && touched.rg ? (
                        <TextErrors>{errors.rg}</TextErrors>
                      ) : null}
                    </ContainerField>
                    <ContainerField>
                      <InputFields
                        label="Data de Nascimento"
                        name="dataNascimento"
                        type="date"
                        width="100%"
                      />
                      {errors.dataNascimento && touched.dataNascimento ? (
                        <TextErrors>{errors.dataNascimento}</TextErrors>
                      ) : null}
                    </ContainerField>
                  </BoxForm>
                  <BoxForm>
                    <ContainerField>
                      <InputFields
                        label="Nacionalidade"
                        name="nacionalidade"
                        placeholder="Insira o seu Nacionalidade"
                        width="100%"
                        component="select"
                      >
                        {Nacionalidade}
                      </InputFields>
                      {errors.nacionalidade && touched.nacionalidade ? (
                        <TextErrors>{errors.nacionalidade}</TextErrors>
                      ) : null}
                    </ContainerField>
                    <ContainerField>
                      <InputFields
                        label="Estado Civil"
                        name="estadoCivil"
                        placeholder="Insira o seu Estado Civil"
                        width="100%"
                        component="select"
                      >
                        {listaCivil}
                      </InputFields>
                      {errors.estadoCivil && touched.estadoCivil ? (
                        <TextErrors>{errors.estadoCivil}</TextErrors>
                      ) : null}
                    </ContainerField>
                    <ContainerField>
                      <InputFields
                        label="Genero"
                        name="genero"
                        component="select"
                        placeholder="Insira o seu Genero"
                        width="100%"
                      >
                        {listaGenero}
                      </InputFields>
                      {errors.genero && touched.genero ? (
                        <TextErrors>{errors.genero}</TextErrors>
                      ) : null}
                    </ContainerField>
                  </BoxForm>
                  <BoxForm>
                    <ContainerField>
                      <InputFields
                        label="Celular"
                        name="celular"
                        placeholder="Ex: (99) 9 9999 - 9999 "
                        width="100%"
                      />
                      {errors.celular && touched.celular ? (
                        <TextErrors>{errors.celular}</TextErrors>
                      ) : null}
                    </ContainerField>
                    <ContainerField>
                      <InputFields
                        label="Email"
                        name="emailString"
                        placeholder="Ex: contato@hospitalcemil.com.br"
                        width="100%"
                      />
                      {errors.emailString && touched.emailString ? (
                        <TextErrors>{errors.emailString}</TextErrors>
                      ) : null}
                    </ContainerField>
                  </BoxForm>
                  <BoxForm>
                    <ContainerField>
                      <InputFields
                        label="Facebook"
                        name="facebook"
                        placeholder="Ex: @hospitalcemil"
                        width="100%"
                      />
                      {errors.celular && touched.celular ? (
                        <TextErrors>{errors.celular}</TextErrors>
                      ) : null}
                    </ContainerField>
                    <ContainerField>
                      <InputFields
                        label="Instagram"
                        name="instagram"
                        placeholder="Ex: @hospitalcemil"
                        width="100%"
                      />
                      {errors.emailString && touched.emailString ? (
                        <TextErrors>{errors.emailString}</TextErrors>
                      ) : null}
                    </ContainerField>
                  </BoxForm>
                </BoxSingleInput>
                <BoxSingleInput>
                  <div>
                    <BoxForm>
                      <ContainerField>
                        <InputFields
                          label="CEP"
                          name="cep"
                          placeholder="Ex: 87501-000"
                          width="100%"
                        />
                        {errors.cep && touched.cep ? (
                          <TextErrors>{errors.cep}</TextErrors>
                        ) : null}
                      </ContainerField>
                    </BoxForm>
                    <BoxForm>
                      <ContainerField>
                        <InputFields
                          label="Endereço"
                          name="logradouro"
                          placeholder="Endereço"
                          width="100%"
                        />
                        {errors.logradouro && touched.logradouro ? (
                          <TextErrors>{errors.logradouro}</TextErrors>
                        ) : null}
                      </ContainerField>
                    </BoxForm>
                    <BoxForm>
                      <ContainerField>
                        <InputFields
                          label="Bairro"
                          name="bairro"
                          placeholder="Ex: bairro"
                          width="100%"
                        />
                        {errors.bairro && touched.bairro ? (
                          <TextErrors>{errors.bairro}</TextErrors>
                        ) : null}
                      </ContainerField>
                      <ContainerField>
                        <InputFields
                          label="Complemento"
                          name="complemento"
                          //placeholder="Ex: estado cd"
                          width="100%"
                        />
                        {errors.complemento && touched.complemento ? (
                          <TextErrors>{errors.complemento}</TextErrors>
                        ) : null}
                      </ContainerField>
                    </BoxForm>
                    <BoxForm>
                      <ContainerField>
                        <InputFields
                          label="Estado"
                          name="estado"
                          placeholder="Ex: Paraná"
                          width="100%"
                        />
                        {errors.estado && touched.estado ? (
                          <TextErrors>{errors.estado}</TextErrors>
                        ) : null}
                      </ContainerField>
                      <ContainerField>
                        <InputFields
                          label="Cidade"
                          name="cidade"
                          placeholder="Ex: Umuarama"
                          width="100%"
                        />
                        {errors.cidade && touched.cidade ? (
                          <TextErrors>{errors.cidade}</TextErrors>
                        ) : null}
                      </ContainerField>
                    </BoxForm>
                  </div>
                  <Divisorio width="100%" minHeight="0.2rem" margin=" 2rem 0" />
                  <BoxForm>
                    <ContainerField>
                      <InputFields
                        label="Senha"
                        name="senha"
                        placeholder="Insira uma senha"
                        width="100%"
                      />
                      {errors.senha && touched.senha ? (
                        <TextErrors>{errors.senha}</TextErrors>
                      ) : null}
                    </ContainerField>
                    <ContainerField>
                      <InputFields
                        label="Confirmar Senha"
                        name="confirmacaoSenha"
                        placeholder="Insira a senha novamente"
                        width="100%"
                      />
                      {errors.senha && touched.senha ? (
                        <TextErrors>{errors.senha}</TextErrors>
                      ) : null}
                    </ContainerField>
                  </BoxForm>
                </BoxSingleInput>
              </ContainerForm>
              <Buttons type="submit">Cadastrar-se</Buttons>
            </Form>
          )}
        </Formik>
      </ContainerCadastro>
    </>
  );
}

export default Candidato;
