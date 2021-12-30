import React from "react";
import {
  BoxField,
  BoxIcon,
  InputField,
  TextLabel,
  BoxLabel,
  ContainerField,
} from "./styles";
import { TextField} from "formik-mui";

function InputFields(props) {
  return (
    <ContainerField margin={props.margin}>
      {props.label ? (
        <BoxLabel>
          <TextLabel fontSizeLabel={props.fontSizeLabel} color={props.color}>
            {props.label}
          </TextLabel>
        </BoxLabel>
      ) : null}
      <BoxField>
        {props.icon ? <BoxIcon>{props.icon}</BoxIcon> : null}
        <InputField
          
          width={props.width}
          placeholder={props.placeholder}
          fontSizeLabel={props.fontSizeLabel}
          fontSize={props.fontSize}
          type={props.type}
          //component={props.component || TextField }
          height={props.height}
          name={props.name}
          label={props.label}
        />
      </BoxField>
    </ContainerField>
  );
}

export default InputFields;
