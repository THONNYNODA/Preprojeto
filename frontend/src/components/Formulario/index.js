import React from "react";
import { Formik,useFormik } from "formik";

import { Formulario } from "./styles";

function Formularios({...props}) {
  const {meta} = useFormik(props)
  return (
    <Formik
      validationSchema={props.validationSchema}
      initialValues={props.initialValues}
      onSubmit={props.submit}
    >
      {({ errors, touched, isSubmitting, values, handleSubmit,setFieldValue }) => (
        <Formulario onSubmit={handleSubmit} >{props.children}</Formulario>
      )}
    </Formik>
  );
}

export default Formularios;
