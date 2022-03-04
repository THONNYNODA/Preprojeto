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
    <ContainerField>
      {label ? (
        <BoxLabel>
          <TextLabel fontSizeLabel={props.fontSizeLabel} color={props.color}>
            {label}
          </TextLabel>
        </BoxLabel>
      ) : null}
      <BoxField>
        {props.icon ? <BoxIcon>{props.icon}</BoxIcon> : null}
        <InputField
          width={props.width}
          fontSize={props.fontSize}
          height={props.height}
          label={props.label}
          bgColor={props.bgColor}          
          {...field}
          {...props}
        >
          {props.children}
        </InputField>
        {props.iconShow ? props.iconShow : null}
      </BoxField>
      {meta.errors && meta.touched ? <div>{meta.errors}</div> : null}      
      {props.nameError? (<TextErrors component="div" name={props.nameError} />): null}
    </ContainerField>
  );
}

export default InputFields;
