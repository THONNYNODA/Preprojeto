import React from "react";
import { BoxField, BoxIcon, InputField, TextLabel, BoxLabel } from "./styles";

function InputFields(props) {
  return (
    <>
      {props.label ? (
        <BoxLabel>
          <TextLabel>{props.label}</TextLabel>
        </BoxLabel>
      ) : null}
      <BoxField>
        {props.icon ? <BoxIcon>{props.icon}</BoxIcon> : null}
        <InputField name={props.name} label={props.label} />
      </BoxField>
    </>
  );
}

export default InputFields;
