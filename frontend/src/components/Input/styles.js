import { styled } from "@mui/system";
import { Field } from "formik";
import { TextField,Select } from "formik-mui";


export const InputField = styled(Field)`
  position: relative;
  width: ${props => props.width || null};
  height: ${(props) => props.height || "2rem"};
  font-size: ${props => props.fontSize || "0.8rem"};
  border: none;
  padding-left: 10px;
  color:#343837;
  &:focus {
    outline: 2px solid green;
  };
`;
export const InputSelect = styled(TextField)`
  & .MuiTextField-root {
    background-color: blue;
  }
`;

export const TextLabel = styled("label")`
  color: ${(props) => props.color || "rgb(48, 150, 96)"};
  font-size: ${props => props.fontSizeLabel || "0.9rem"};
`;

export const BoxField = styled("div")`
  display: flex;  
  margin: 0 0 0.7em 0;
`;
export const ContainerField = styled("div")`
  display: block;
  width: 100%;
  margin: ${props => props.margin || "5px"};
`;

export const BoxLabel = styled("div")`
  display: flex;
`;

export const BoxIcon = styled("span")`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 3.5rem;
  background-color: #fff;
  color: rgb(48, 150, 96);
`;
