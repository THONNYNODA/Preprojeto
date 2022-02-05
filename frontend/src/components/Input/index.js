import React from "react";
import {
  BoxField,
  BoxIcon,
  InputField,
  TextLabel,
  BoxLabel,
  ContainerField,

} from "./styles";


function InputFields(props) {

  return (
    <ContainerField>
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
          bgColor={props.bgColor}
          value={props.value}
        >
          {props.children}
        </InputField>
        {props.iconShow  ? props.iconShow : null}
      </BoxField>
      {props.errors && props.touched ? <div>{props.errors}</div> : null} 
    </ContainerField>
  );
}


export default InputFields;
