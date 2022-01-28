import { styled } from "@mui/system";

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
  max-width: 680px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export const BoxDetalhe = styled("div")`
  width: 100%;
  padding: 10px;
  display: flex;
`;

export const BoxInput = styled("div")`
  width: 100%;
  flex: 1;
  display: flex;
`;

export const TitleDetalhe = styled("h2")`
  font-weight: lighter;
`;
export const TextDetalhe = styled("p")`
  &:nth-of-type(1) {
    margin-right: 10px;
  }
`;
export const Buttons = styled("button")`
  width: 100%;
  font-size: 1.5rem;
  padding: 10px;
  color: #fff;
  background-color: #1f6357;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(31, 99, 87, 0.9);
    //color: blue;
  }
`;
