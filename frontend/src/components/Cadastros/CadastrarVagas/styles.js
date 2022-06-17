import { styled } from "@mui/system";
import { Field } from "formik";



export const ModalDetalhe = styled("div")`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 998;
`;

export const ContainerDetalhe = styled("div")`
  width: 100%;
  max-width: 68rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export const BoxDetalhe = styled("div")`
  width: 100%;
  padding: 1rem;
  display: flex;
`;

export const BoxInput = styled("div")`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const TitleDetalhe = styled("h2")`
  font-weight: lighter;
`;
export const TextDetalhe = styled("p")`
  &:nth-of-type(1) {
    margin-right: 1rem;
  }
`;
export const Buttons = styled("button")`
  width: 100%;
  font-size: 1.2rem;
  padding: 1rem;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  border-radius: 0 0 0.7rem 0.7rem ;
  cursor: pointer;
  &:hover {
    background-color: rgba(31, 99, 87, 0.9);
    //color: blue;
  }
`;
