import React from "react";
import { BoxField, BoxIcon, InputField } from "./styles";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function InputFields(props) {
  return (
    <BoxField>
      {props.icon ? <BoxIcon>{props.icon}</BoxIcon> : null}
      <InputField name={props.name} label={props.label} />
    </BoxField>
  );
}

export default InputFields;
