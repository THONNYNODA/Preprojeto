import React from "react";
import { Formik } from "formik";

import { Formulario } from "./styles";

function Formularios(props) {
  return (
    <Formik
      validationSchema={props.validationSchema}
      initialValues={props.initialValues}
      onSubmit={props.submit}
    >
      {({ errors, touched, isSubmitting, values, handleSubmit }) => (
        <Formulario onSubmit={handleSubmit}>{props.children}</Formulario>
      )}
    </Formik>
  );
}

export default Formularios;
