import { styled } from "@mui/system";
import { keyframes } from "@emotion/react";

const transition = keyframes`
  from {
    transform: translate(-50%,-100%);
  }
  to {
    transform: translate(-50%,20%);
  }
`;

export const ModalDetalhe = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;
export const BoxIcon = styled("div")`
  color: #fff;
  padding: 0.5rem;
  position: relative;
`;

export const TitleConfirmacao = styled("h2")`
  color: #fff;
  font-weight: 400;
  font-size: 1.2rem;
  padding: 0;
`;

export const ContainerDetalhe = styled("div")`
  text-align: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 20%);
  animation-name: ${transition};
  animation-duration: 1s;
`;
