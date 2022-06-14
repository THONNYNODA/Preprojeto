import React from "react";
import {
  BoxField,
  BoxIcon,
  InputField,
  TextLabel,
  BoxLabel,
  ContainerField,
  TextErrors,
} from "./styles";
import { useField } from "formik";

function InputFields({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <ContainerField {...props} >
      {label ? (
        <BoxLabel {...props}>
          <TextLabel {...props} >
            {label}
          </TextLabel>
        </BoxLabel>
      ) : null}
      <BoxField>
        {props.icon ? <BoxIcon {...props}>{props.icon}</BoxIcon> : null}
        <InputField
          
          {...field}
          {...props}
        >
           {props.children}
        </InputField>
        {props.iconShow ? props.iconShow : null}
      </BoxField>
      {meta.errors && meta.touched ? <div>{meta.errors}</div> : null}
      {props.nameError ? (
        <TextErrors component="div" name={props.nameError} />
      ) : null}
    </ContainerField>
  );
}

export default InputFields;
