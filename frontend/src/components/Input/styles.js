import { styled } from "@mui/system";
import { Field } from "formik";

export const InputField = styled(Field)`
  position: relative;
  width: ${(props) => props.width || null};
  height: ${(props) => props.height || "2rem"};
  font-size: ${(props) => props.fontSize || "0.8rem"};
  border: none;
  padding-left: 10px;
  color: #343837;
  z-index: 2;
  &:focus {
    outline: 2px solid #1f6357;
  }
`;

export const InputOption = styled("option")`
  color: #343837;
`;

export const TextLabel = styled("label")`
  color: ${(props) => props.color || "#1f6357"};
  font-size: ${(props) => props.fontSizeLabel || "0.9rem"};
`;
export const TextErrors = styled("span")`
  color: #fd5956;
  font-size: 0.9rem;
  margin: 10px;
`;

export const BoxField = styled("div")`
  display: flex;
  margin: 0 0 0.7em 0;
`;
export const ContainerField = styled("div")`
  display: block;
  width: 100%;
  margin: ${(props) => props.margin || "0 5px"};
  padding: ${(props) => props.padding};
`;

export const BoxLabel = styled("div")`
  display: flex;
`;

export const BoxIcon = styled("span")`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 2rem;
  background-color: #fff;
  color: #1f6357;
  z-index: 1;
`;

export const BoxIconShow = styled("span")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  color: #1f6357;
  cursor: pointer;
  position: absolute;
  right: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 999;
`;
