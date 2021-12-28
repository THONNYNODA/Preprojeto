import { styled } from "@mui/system";
import { Field } from "formik";

export const InputField = styled(Field)`
  position: relative;
  //width: calc(100% - 15px);
  width: 100%;
  height: 3.5rem; 
  font-size: 1.2rem;
  border: none;
  padding-left: 10px;
  background-color: #fff;
  &:focus {
    outline: 2px solid green;
  }
`;

export const BoxField = styled("div")`
  display: flex;
  margin: 0.5em 0;
`;
export const BoxIcon = styled("span")`
  display: flex;
  text-align:center;
  position: relative;
  align-items: center;
  justify-content:center;
  width: 70px;
  height: 3.5rem;
  background-color: #fff ;
  color:rgb(48, 150, 96)
  
`;
