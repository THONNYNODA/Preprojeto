import { styled } from "@mui/system";

export const ModalDetalhe = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 9999;
  
`;
export const BoxIconClose = styled("div")`
  color: #ff1700;
  position: fixed;
  right: -30px;
  top: -15px;
  border-radius: 7rem;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

export const ContainerDetalhe = styled("div")`
  max-width: 560px;
  max-height: 480px;
  position: absolute;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
`;
