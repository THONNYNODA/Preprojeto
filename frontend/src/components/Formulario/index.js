import React from "react";
import { Formik, useFormik } from "formik";

import { Formulario } from "./styles";

function Formularios({ ...props }) {
  const { meta, teste } = useFormik(props);
  return (
    <Formik
      {...meta}
      validationSchema={props.validationSchema}
      initialValues={props.initialValues}
      onSubmit={props.submit}
    >
      {({
        errors,
        touched,
        isSubmitting,
        values,
        handleSubmit,
        setFieldValue,
      }) => (
        <Formulario {...props} onSubmit={handleSubmit}>
          {props.children}
        </Formulario>
      )}
    </Formik>
  );
}

export default Formularios;
