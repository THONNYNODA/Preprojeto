import React from "react";
import { InputField } from "./styles";

function InputFields(props) {
  return <InputField name={props.name} label={props.label} />;
}

export default InputFields;
