import React from "react";
import { Formik } from "formik";


import { Formulario,Forms } from './styles';

function Formularios(props) {
  return (
    <Formik
      validationSchema={props.validationSchema}
      initialValues={props.initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
        {({errors,touched,isSubmitting,values}) => (
            <Formulario>
                {props.children}
            </Formulario>
        )}
    </Formik>
  );
}

export default Formularios;
