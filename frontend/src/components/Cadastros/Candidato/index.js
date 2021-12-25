import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import Card from "../../Card";
import { CadastroStyles} from "./styles";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { listasPaises } from "../../../services/listaPaises";
import * as yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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

function Candidato() {
  const classes = CadastroStyles();
  const [view, setView ] = useState();

  const Genero = ["Masculino", "Feminino", "Outros"];
  const civil = ["Solteiro(a)", "Casado(a)", "Viúvo(a)"];

  const listaGenero = Genero.map((e) => (
    <MenuItem value={e}>{e.toLocaleUpperCase()}</MenuItem>
  ));
  const listaCivil = civil.map((e) => (
    <MenuItem value={e}>{e.toLocaleUpperCase()}</MenuItem>
  ));
  const Nacionalidade = listasPaises.map((e) => (
    <MenuItem value={e.gentilico}>{e.gentilico.toLocaleUpperCase()}</MenuItem>
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
      <Grid className={classes.boxCenter} container sx={12}>
        <Card>
          <Box className={classes.containerForm}>
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
              {({ errors, touched, isSubmitting, values }) => (
                <Form>
                  <Box className={classes.containerField}>
                    <Box className={classes.boxField}>
                      
                      <Field
                        className={classes.field}
                        name="nome"
                        fullWidth
                        component={TextField}
                        label="Nome"
                        size="small"
                      />
                    </Box>
                    <Box className={classes.boxField}>
                      <Field
                        className={classes.field}
                        name="nomeSocial"
                        component={TextField}
                        label="Nome Social"
                        fullWidth
                        size="small"
                      />
                    </Box>
                    <Box className={classes.boxField}>
                      <Field
                        className={classes.field}
                        name="cpf"
                        component={TextField}
                        label="CPF"
                        fullWidth
                        size="small"
                      />
                      <Field
                        className={classes.field}
                        name="rg"
                        component={TextField}
                        label="RG"
                        fullWidth
                        size="small"
                      />
                      <Field
                        className={classes.field}
                        name="dataNascimento"
                        component={TextField}
                        label="Data de Nascimento"
                        type="data"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        size="small"
                      />
                    </Box>
                    <Box className={classes.boxField}>
                      <Field
                        className={classes.field}
                        name="genero"
                        component={TextField}
                        select
                        label="Genero"
                        fullWidth
                        size="small"
                      >
                        {listaGenero}
                      </Field>
                      <Field
                        className={classes.field}
                        name="nacionalidade"
                        component={TextField}
                        label="Nacionalidade"
                        select
                        fullWidth
                        size="small"
                      >
                        {Nacionalidade}
                      </Field>
                      <Field
                        className={classes.field}
                        name="estadoCivil"
                        fullWidth
                        select
                        component={TextField}
                        label="Estado Civil"
                        size="small"
                      >
                        {listaCivil}
                      </Field>
                    </Box>
                    <Box className={classes.boxField}>
                      <Field
                        className={classes.field}
                        name="celular"
                        component={TextField}
                        label="Celular"
                        fullWidth
                        size="small"
                      />
                      <Field
                        className={classes.field}
                        name="emailString"
                        fullWidth
                        component={TextField}
                        label="Email"
                        size="small"
                      />
                    </Box>
                  </Box>
                  <Divider />

                  <Box className={classes.containerField}>
                    <Box className={classes.boxField}>
                      <Field
                        className={classes.field}
                        name="cep"
                        component={TextField}
                        label="CEP"
                        size="small"
                        //fullWidth
                      />

                      <Field
                        className={classes.field}
                        name="logradouro"
                        component={TextField}
                        label="Logradouro"
                        fullWidth
                        size="small"
                      />
                      <Field
                        className={classes.field}
                        name="bairro"
                        component={TextField}
                        label="Bairro"
                        size="small"
                        //fullWidth
                      />
                    </Box>
                    <Box className={classes.boxField}>
                      <Field
                        className={classes.field}
                        name="complemento"
                        component={TextField}
                        label="Complemento"
                        fullWidth
                        size="small"
                      />

                      <Field
                        className={classes.field}
                        name="cidade"
                        component={TextField}
                        label="Cidade"
                        fullWidth
                        size="small"
                      />

                      <Field
                        className={classes.field}
                        name="estado"
                        component={TextField}
                        label="Estado"
                        fullWidth
                        size="small"
                      />
                    </Box>
                  </Box>
                  <Divider />
                  <Box className={classes.containerField}>
                    <Box className={classes.boxField}>
                      <Field
                        className={classes.field}
                        name="senha"
                        component={TextField}
                        type={view ? "text" : "password"}
                        label="Senha"
                        fullWidth
                        size="small"
                      />
                      <Field
                        className={classes.field}
                        name="confirmacaoSenha"
                        component={TextField}
                        type={view ? "text" : "password"}
                        label="Confirme a Senha"
                        fullWidth
                        size="small"
                      />
                      <IconButton
                        onChange={handleShowSenha}
                        onMouseDown={handleShowSenha}
                      >
                        {view ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </Box>
                  </Box>
                  <Button
                    variant="outlined"
                    fullWidth
                    size="large"
                    type="submit"
                  >
                    Cadastrar
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Card>
      </Grid>
    </>
  );
}

export default Candidato;
