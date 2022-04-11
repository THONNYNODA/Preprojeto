import { styled } from "@mui/system";
import { Field, ErrorMessage } from "formik";

export const InputField = styled(Field)`
  position: relative;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "1.5rem"};
  font-size: ${(props) => props.fontSize || "0.8rem"};
  
  border: none;
  padding-left: 10px;
  color: #343837;
  z-index: 2;
  background-color: ${(props) => props.bgColor};
  &:focus {
    outline: 2px solid #1f6357;
  }
`;

export const InputOption = styled("option")`
  color: #343837;
`;

export const TextLabel = styled("label")`
  color: ${(props) => props.color || "#ffffff"};
  font-size: ${(props) => props.fontSizeLabel || "0.9rem"};
  @media (max-width: 980px) {
    color: #ffffff;
  } ;
`;
export const TextErrors = styled(ErrorMessage)`
  color: #B33030;
  font-size: 0.9rem;
  text-align: center;
  margin: 10px;
`;

export const BoxField = styled("div")`
  display: flex;
  margin: 0 0 0.7em 0;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;
export const ContainerField = styled("div")`
  display: block;
  width: 100%;
  margin: ${(props) => props.margin || null};
  padding: ${(props) => props.padding};
  flex: ${(props) => props.flex};
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
