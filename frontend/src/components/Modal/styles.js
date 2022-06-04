import { styled } from "@mui/system";

export const ModalDetalhe = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  
`;
export const BoxIconClose = styled("div")`
  color: #ff1700;
  position: fixed;
  display: flex;
  right: -3rem;
  top: -1.5rem;
  border: 2px solid ;
  border-radius: 2.5rem;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

export const ContainerDetalhe = styled("div")`
  max-width: 56rem;
  max-height: 48rem;
  position: absolute;
  border-radius: 1.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
`;
