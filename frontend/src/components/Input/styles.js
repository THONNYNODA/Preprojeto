import { styled } from "@mui/system";
import { Field, ErrorMessage } from "formik";

export const InputOption = styled("option")`
  color: #343837;
`;

export const TextLabel = styled("label")`
  color: ${(props) => props.color || "#ffffff"};
  font-size: ${(props) => props.fontSizeLabel || "0.9rem"};
  /* @media (max-width: 980px) {
    color: ${(props) => props.colorResponse || "#1f6357"};
  } ; */
`;
export const TextErrors = styled(ErrorMessage)`
  color: #b33030;
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
  &:hover{
    border: 2px solid pink;
  };
`;

export const BoxIconShow = styled("span")`
  /* display: inline-block;
  height: ${(props) => props.height}; */
  color: #1f6357;
  cursor: pointer;
  position: absolute;
  right: calc(0px + 3%);
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 999;
`;
export const InputField = styled(Field)`
  position: relative;
  width: ${(props) => props.width || "100%"};
  font-size: ${(props) => props.fontSize || "0.8rem"};
  border: none;
  padding: 5px;
  color: #343837;
  z-index: 2;
  background-color: ${(props) => props.bgColor};
  &:focus {
    border-bottom: 2px solid #1f6357;
    outline: 0;
  }
`;
