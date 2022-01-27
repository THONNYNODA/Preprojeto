import React from "react";
import {
  BoxField,
  BoxIcon,
  InputField,
  TextLabel,
  BoxLabel,

} from "./styles";


function InputFields(props) {

  return (
    <>
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
          as={props.as}
          width={props.width}
          placeholder={props.placeholder}
          fontSize={props.fontSize}
          type={props.type}
          height={props.height}
          name={props.name}
          label={props.label}
          component={props.component}
        >
          {props.children}
        </InputField>
        {props.iconShow  ? props.iconShow : null}
      </BoxField>
      {props.errors && props.touched ? <div>{props.errors}</div> : null} 
    </>
  );
}


export default InputFields;
