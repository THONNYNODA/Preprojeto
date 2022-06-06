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
  color: var(--error-color);
  position: fixed;
  display: flex;
  right: 0;
  border-radius: 2.5rem;
  cursor: pointer;
  z-index: 999;
  &:hover {
    filter: brightness(0.7);
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
  z-index: 9999;
`;
